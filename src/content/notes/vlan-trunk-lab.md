---
title: 'VLANs, one trunk, and the mistake I keep making'
date: 2026-07-19
summary: 'A three-switch Packet Tracer lab where everything looked configured and nothing could ping. One missing line. I have now made this mistake enough times to write it down.'
tags: ['CCNA', 'VLANs', 'Packet Tracer']
---

Standard lab. Two access switches, one distribution switch, two VLANs, hosts that should reach their own VLAN across the trunk. All documentation addressing: `192.0.2.0/24` for VLAN 10, `198.51.100.0/24` for VLAN 20.

## The build

On each access switch:

```
enable
configure terminal
 vlan 10
  name STAFF
 vlan 20
  name VOICE
 exit

 interface range fastEthernet 0/1 - 12
  switchport mode access
  switchport access vlan 10
 exit

 interface range fastEthernet 0/13 - 20
  switchport mode access
  switchport access vlan 20
 exit
```

And the uplink:

```
 interface gigabitEthernet 0/1
  switchport mode trunk
  switchport trunk allowed vlan 10,20
 exit
```

Looked right. Hosts in VLAN 10 on switch A reached each other. Hosts in VLAN 10 on switch B reached each other. Across the trunk, nothing.

## What I actually did wrong

I built the VLANs on both access switches and forgot to create them on the **distribution** switch. The trunk came up. The interface said `connected`. `show interfaces trunk` listed 10 and 20 as allowed. And the frames still went nowhere, because a switch will happily trunk a VLAN it doesn't have in its own database.

```
Switch-DIST# show vlan brief
VLAN Name                             Status    Ports
---- -------------------------------- --------- -----
1    default                          active    Gi0/3, Gi0/4
```

There it is. No VLAN 10, no VLAN 20.

## The check that catches it

`show interfaces trunk` has three sections. I used to read only the first one.

```
Port      Vlans allowed on trunk
Gi0/1     10,20

Port      Vlans allowed and active in management domain
Gi0/1     1

Port      Vlans in spanning tree forwarding state and not pruned
Gi0/1     1
```

"Allowed" is what I typed. **"Allowed and active"** is what the switch actually believes. When those two disagree, the VLAN doesn't exist somewhere in the path. That second section is the entire diagnosis and I'd been scrolling past it.

## Habit I'm building

Create the VLAN database on every switch in the path first. Verify with `show vlan brief` on each one. Only then configure trunks and access ports.

Build the thing that has to exist before configuring the thing that references it. Same instinct as help desk work. Verify the account exists before troubleshooting why the login fails.

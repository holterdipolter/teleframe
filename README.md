<div align="center">
	<p>
		<a><img src="https://simonwedel.de/files/teleframe/icon221x200.png" alt="teleframe"></a><br>
		<h1>Teleframe</h1>
	</p>
	<p>
        Turn your old Raspi-Hardware into a remote-controlled picture frame for your elderly family members and friends!<br>Or just for yourself!
	</p>
	<p>
		<a><img src="https://img.shields.io/github/last-commit/holterdipolter/teleframe.svg" alt="Latest Comit"></a>
    </p>
</div>

## Table Of Contents

- [About](#about)
- [Hardware prerequisites](#hardware-prerequisites)
- [Software architecture and prerequisites](#software-architecture-and-prerequisites)
- [Installation](#installation)
	- [Automatic installation](#automatic-installation)
	- [Manual installation](#manual-installation)
- [Usage and configuration](#usage-and-configuration)
	- [Touchscreen](#touchscreen)
	- [Webinterface](#webinterface)
		- [Images](#images)
		- [Videos](#videos)
		- [Telegram](#telegram)
		- [System](#system)
		- [Admin](#admin)
		

## About

Teleframe is a Node-Red based open source app that turns your Raspberry Pi or Linux computer connected to a touchscreen display into a digital picture frame. Using the Messenger App Telegram, you can send pictures, videos and messages to Teleframe while it ensures that all messages and media are displayed in an automatic slideshow on screen.

Teleframe is designed primarily for seniors or people with disabilities who can&#39;t or don&#39;t want to use computers/mobiles/tablets. Once set up, Teleframe works completely autonomously, but can also be operated via touchscreen or webinterface in the browser or as progressive web app. This enables externals, e.g. family members to manage and control the device remotely.


<p align="center">
	<a><img src="https://simonwedel.de/files/teleframe/overview.jpg" alt="teleframe"></a>
</p>


## Hardware prerequisites

**ARM-SoCs:** All Raspberry Pi boards from Raspi 1B+ upwards, as well as Raspi Zero W are supported. Older variants and other Linux computer (ARM SoCs are recommended to reduce power consumption) may work, but have not been tested and may require software adjustments.

**Displays:** Basically, all touchscreens supported by Raspberry Pi boards can be used. Tested and recommended are Touchscreens from [Waveshare](https://www.waveshare.com/product/displays.htm).

**Wifi:** For Raspberry Pi 1B+ an additional Wifi dongle is required. Tested and recommended are cheap Realtek rtl8188eu chips. Other chips might also work, but must support AP mode. Please note that additional [drivers](github.com/lwfinger/rtl8188eu) for rtl8188eu are needed, as the Raspbian default kernel driver doesn&#39;t support AP-Mode.

**Loudspeaker:** In order to watch videos with audio or you want to use sound notifications, a loudspeaker must be connected. There are no special limitations other than a standard 3.5mm headphone jack is needed (not supported by raspi zero w!).


## Software architecture and prerequisites

<p align="center">
	<a><img src="https://simonwedel.de/files/teleframe/softArch.jpg" alt="teleframe"></a>
</p>

Kodi is used to display videos and pictures as a slidehow with smooth transitions. Kodi is actually a popular, very powerful media centre application, which at first glance seem too extensive for the simple task of showing pictures and videos on a display. However, compared to appropriate libraries providing gpu support, it makes optimal use of GPU acceleration also on older Raspberry Pi boards, which is important to enable smooth transitions. Teleframe therefore does not handle the rendering itself, but controls Kodi via REST API.


## Installation

### Automatic installation

A script for automatic installation will be provided soon.


### Manual installation

Only Raspbian is supported so far. Other distros might work.

1. Download newest version of [Raspbian Lite](https://www.raspberrypi.org/software/operating-systems/)
2. Copy Raspbian Image to SD-Card. [Etcher](https://www.balena.io/etcher/) is highly recommended
3. Boot Raspbian, and set up wifi using raspi config by enter `raspi-config` in terminal

4. Update and install prerequisites/dependencies:

	```bash
	sudo apt update && sudo apt upgrade
	sudo apt install kodi nginx ffmpeg
	```

	optional: Install OpenVPN for VPN access
	
	```bash
	sudo apt install openvpn
	```

5. Start and enable kodi and nginx on system boot
	
	```bash
	sudo systemctl enable kodi nginx
	sudo systemctl start kodi nginx
	```

6. Install Node.js and Node-red

	```bash
	bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)
	```

7. Open Node-Red Editor under `http://<raspi-ip>:1880` and [enable git support](https://nodered.org/docs/user-guide/projects/)
8. Create new Node-Red Project using &quot;Clone project&quot; and add Teleframe git url
9. When project is loaded, Teleframe WebUI is available under `https://<raspi-ip>:1243`


## Usage and configuration

### Touchscreen

Teleframe supports just a few simple touchscreen gestures to reduce usage complexity. However, most important commands are supported:

| **Gesture**			| **Command** 										|
| ----------			| -----------										| 
| One finger tap		| Start / stop slideshow 							|
| Swipe left / right	| Previous / next image 							|
| One finger long press	| Turn on display / jump to newest message or image |
| Two finger long press	| Turn off display									|


### Webinterface

While touchcontrol is limited, Teleframe is highly configurable and controllable using the build in WebUI. Open `https://<raspi-ip>:1243` in your browser, login with username and password and check out navigation panel behind hamburger menu at the top left.


#### IMAGES

<p align="left">
	<a><img src="https://simonwedel.de/files/teleframe/webinterface/images-low.jpg" alt="teleframe"></a>
</p>

**Navigation:** You can watch and control the image slideshow actually displayed on the device. Use navigation buttons to control the slideshow, use the stick button for preventing images from being automatically deleted or delete images using the trash button manually.

*Note:* If a message was attached to an image, you are able to delete only the message without deleting the image at the same time. Just click on the trash button and you are being asked whether you want to delete only text or both, image and text.

**General Settings:** Set up showtime, as well as max. images in the loop and trash.

*Note:* Teleframe was intended to be able to operate completely autonomously and without additional intervention. To consider storage limitations, images as well as videos are stored in a loop with a predefined maximum size. The loop is working according to the first in, last out principle, therefore old images are moved to trash automatically when new images are arriving and the loop size has reached a predefined maximum.

**Galerie:** Overview of all active images stored in the slideshow loop. You can delete or stick image or start the slideshow from a certain position.

**Trash:** Overview of all images in the trash. Images can be restored or finally deleted.

**Textoverlay:** : Adjust message text related format settings like size, font, colour etc. as well as size and position of the sender&#39;s name.

**If new images arrive…:** Set several options to notify the Teleframe user about new messages, either by sound or onscreen info.


#### VIDEOS

<p align="left">
	<a><img src="https://simonwedel.de/files/teleframe/webinterface/videos-low.jpg" alt="teleframe"></a>
</p>

**Navigation:** All received Videos are shown up in the video gallery at the bottom of the navigation section. Click on a video to load in in the preview, where you can watch your video in the browser. Use Navigation Buttons to start the video remotely on the Teleframe-Screen.

**Settings:** Set max. number of videos are being stored until old videos will be deleted. If you have issues playing videos on the Teleframe, try using the option &quot;convert incoming videos&quot;. Just use it if really needed, as transcoding is usually painfully slow especially on old Raspis.


#### TELEGRAM

<p align="left">
	<a><img src="https://simonwedel.de/files/teleframe/webinterface/telegram-low.jpg" alt="teleframe"></a>
</p>

Add, rename and delete users to/from the list of users allowed to send messages and media.

You add new users using the following procedure:

1. Activate `allow new user` button.
2. Send a message with random content to the telegram bot.
3. The Telegram users unique Chat-ID will appear instantly. Add a username and click on add button. The new user with Chat-ID will be entered in the user list and is now allowed to send messages to the Teleframe bot.
4. Deactivate `allow new user` button.


#### SYSTEM

<p align="left">
	<a><img src="https://simonwedel.de/files/teleframe/webinterface/system-low.jpg" alt="teleframe"></a>
</p>

**Screen:** Turn on or off the screen manually or set timers for switching the screen on and off automatically.

**Power:** Power off or restart the device.

**Wifi:** Enter your Wifi credentials to connect to your Wifi.

**FreeDNS:** Free Dynamic DNS service used to access Teleframe from outside your local network. Please visit [FreeDNS Homepage](https://freedns.afraid.org/zc.php?from=L21lbnUv), create an account and follow instructions on how to create your own subdomain. Having a new subdomain created, copy its direct URL (under Dynamic DNS section) and paste it to `Update-URL` in the FreeDNS section of the Teleframe-WebUI. Add the related subdomain and click on `update`.

*Note:* You must set up a port forwarding rule in your local router to enable remote access. Choose Port `1243` as internal port and map it to the teleframe ip address.


#### ADMIN

<p align="left">
	<a><img src="https://simonwedel.de/files/teleframe/webinterface/admin-low.jpg" alt="teleframe"></a>
</p>

For experienced users only!!! Several options for debugging, restoring Nginx and Node-Red default setting, resetting the whole system or specific internal procedures, and other stuff, usually not needed if everything runs trouble free.
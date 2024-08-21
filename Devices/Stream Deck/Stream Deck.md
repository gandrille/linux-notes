https://pypi.org/project/streamdeck/
https://python-elgato-streamdeck.readthedocs.io/en/stable/
https://github.com/abcminiuser/python-elgato-streamdeck/tree/master/src
# Installation 
Installation requires a few steps, but it is [VERY well documented](https://python-elgato-streamdeck.readthedocs.io/en/stable/pages/backend_libusb_hidapi.html) .
At the end of the installation, running the [device discovery script](https://github.com/abcminiuser/python-elgato-streamdeck/blob/master/src/example_deckinfo.py) (deckinfo.py) should work.

Dans le venv
pip3 install streamdeck
pip3 install pillow
pip3 install wheel
pip3 install pydbus

sudo apt install -y python3-pip python3-setuptools

sudo apt install -y libudev-dev libusb-1.0-0-dev libhidapi-libusb0
sudo apt install -y libjpeg-dev zlib1g-dev libopenjp2-7 libtiff6
# Add udev rule to allow all users non-root access to Elgato StreamDeck devices:
sudo tee /etc/udev/rules.d/10-streamdeck.rules << EOF
SUBSYSTEMS=="usb", ATTRS{idVendor}=="0fd9", GROUP="users", TAG+="uaccess"
EOF
# Reload udev rules to ensure the new permissions take effect
sudo udevadm control --reload-rules

cd ~/programmes/ippon/stream-deck/stream-deck
source pyenv/bin/activate

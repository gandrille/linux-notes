https://linuxfr.org/users/hugotrip/journaux/systemd-a-la-maison

`mkdir -p ~/.config/systemd/user`

File `my-service.service`
```
[Unit]
Description=My service
After=syslog.target network.target

[Service]
ExecStart=/usr/local/bin/montest.sh
Restart=always
RestartSec=2s
StandardOutput=append:/home/foo/bar-out.log
StandardError=append:/home/foo/bar-err.log

[Install]
# There is no multi-user.target in --user mode. User services should by WantedBy=default.target
WantedBy=default.target
```

`systemctl --user daemon-reload`
`systemctl --user start my-service.service`
`systemctl --user enable my-service.service`

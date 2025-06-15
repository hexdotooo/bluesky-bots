# [Hex](https://bsky.app/profile/hex.ooo)'s Bluesky bots

This is the framework which runs [my bots on Bluesky](https://bsky.app/profile/hex.ooo/lists/3laz55pjzwy2o).

It requires Node.js 20 or later in order to use the new .env support.

## Usage

After configuring your bots and their passwords (see below):

```shell
pnpm run prod
```

Run live and post to Bluesky

```shell
pnpm run demo
```

Print demo output from all bots to the console once every two seconds

## Configuration and authentication

Every bot to be run is listed in `bots.config.json`, and has a matching entry
in `.env.live`. That file contains encrypted copies of the bots' Bluesky
passwords, in this format:
* `PASSWORD_BOT-NAME=someverylongstringofgarbage`

`BOT-NAME` is the literal username of the bot, not including `.bsky.social`.
Note that it's lowercase in `bots.config.json` and uppercase in `.env.live`.

The encryption and decryption of secrets is provided by
_[dotenvx](https://dotenvx.com/)_. Before the bots can be run, the private key
to decrypt their passwords must be set as an environment variable:

```shell
export DOTENV_PRIVATE_KEY_LIVE=some_long_key_you_keep_somewhere_secure
```

See the [dotenv basics docs](https://dotenvx.com/docs/quickstart) for how to
use it to encrypt your bot passwords so that they can be safely committed to a
repository.

## Running as a systemd service (optional)

I run the app as a _[systemd](https://systemd.io/)_ user service, so that if
it crashes (it's my code, after all) I get notified about it by email.

Example configuration files for this are in the `systemd-config` folder:
* `bluesky-bots.sh` - goes in `/usr/local/bin`, edit with path to this repo
* `bluesky-bots.service` - goes in `/home/yourname/.config/systemd/user`

Email is sent using
[`systemd-send-mail`](https://github.com/nchevsky/systemd-send-mail) by Nick
Chevsky (which is released under the [BSD 2-Clause License](./LICENSES.md)).
Install these two files to `/etc/systemd/system`:
* `send-mail` - edit to specify email addresses to send from and to
* `send-mail@.service`

Create a soft link in `/home/yourname/.config/systemd/user` to the mail
service:

```shell
ln -s /etc/systemd/system/send-mail@.service
```

Import the private key to systemctl:

```shell
systemctl --user import-environment DOTENV_PRIVATE_KEY_LIVE
```

Enable and immediately run the service:

```shell
systemctl --user enable --now bluesky-bots.service
```

Note that this command does _not_ include `sudo` - for security the script is
run as your user, not root.

If you're going to log out, you can first use _loginctl_ to enable "lingering"
for the user you're running the script as.

```shell
sudo loginctl enable-linger username
```

This is the first time I've used systemd, so can't offer much advice if
something's going wrong with your setup. You can run this command to get some
info about the current status of a service, or a log of why it failed to run:
`systemctl --user status bluesky-bots`

Documentation:
* [systemd quick start guide](https://docs.fedoraproject.org/en-US/quick-docs/systemd-understanding-and-administering/)
* [Basic systemctl usage](https://wiki.archlinux.org/title/Systemd#Basic_systemctl_usage) (I don't use Arch btw)
* [systemd user services](https://wiki.archlinux.org/title/Systemd/User)
* [loginctl](https://www.freedesktop.org/software/systemd/man/latest/loginctl.html)

# APT



## Fix apt key deprecation warning

- list apt keys

  ```bash
  sudo apt-key list
  ```

- Each key has a file in `etc/apt/trusted.gpg.d`, if not , the warning appears: 

  ```
  Key is stored in legacy trusted.gpg keyring (/etc/apt/trusted.gpg), see the DEPRECATION section in apt-key(8) for details.
  ```

- Fix: https://askubuntu.com/a/1409732/1141857
#!/bin/bash

# install node
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# resolves global npm Error: EACCES: permission denied,
# install npm packages globally without sudo
# modified from https://stackoverflow.com/questions/18088372/how-to-npm-install-global-not-as-root
mkdir "${HOME}/.npm-packages"
printf "prefix=${HOME}/.npm-packages" >> $HOME/.npmrc
cat <<EOF | tee -a ~/.bashrc | tee -a ~/.zshrc
NPM_PACKAGES="\${HOME}/.npm-packages"
NODE_PATH="\${NPM_PACKAGES}/lib/node_modules:\${NODE_PATH}"
PATH="\${NPM_PACKAGES}/bin:\${PATH}"
# Unset manpath so we can inherit from /etc/manpath via the `manpath`
# command
unset MANPATH # delete if you already modified MANPATH elsewhere in your config
MANPATH="\${NPM_PACKAGES}/share/man:\$(manpath)"
EOF

sudo npm install -g gatsby-cli

npm install && cd .. 
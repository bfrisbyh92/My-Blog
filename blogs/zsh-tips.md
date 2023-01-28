---
title: ZSH Tips
publishedOn: January 10th, 2023
slug: zsh-tips
excerpt: ZSH, or Z Shell, is a Unix shell that is often used as an alternative to the default shell, Bash, on macOS and Linux systems. It is popular among developers and power users due to its extensive set of features and customization options. I want to cover some of the ways I get the most from ZSH.
readingTime: 5 mins
---

# ZSH Tips

One of the most notable features of ZSH is its powerful command line completion, which makes it easy to quickly navigate and use the command line. Additionally, it includes built-in support for various programming languages, such as Ruby and Python, which allows developers to use the shell for scripting and automation tasks.

Another interesting feature of ZSH is its ability to customize the shell's appearance and behavior through the use of themes and plugins. There are many popular ZSH plugins, such as "oh-my-zsh", which provide additional features and enhancements to the shell.

It also has a powerful history mechanism, where it saves the command history and allows searching and editing previous commands, which is very helpful for navigating and repeating previous commands, it also allows you to use the arrow keys to go back and forth through your command history.

## My Favorite Features

and
## and How I get the most from ZSH

- Hotkey windows, absolutely amazing. For me, I have a keyboard shortcut for my hotkey window. What is a hotkey window? The image above attached to this article is a hotkey window
  
  **A window that drops down from menu bar when shortcut used, and dissapears but can be brought back at anytime easily**

  - Custom functions inside .zshrc file
  - aliases inside the .zshrc
  - plugins, inside ~/oh-my-zsh/Plugins I suggest looking around, seeing what's available and adding the ones you like to the plugins section of .zshrc
  - Extra add ons, so for me with Homebrew, I would search `brew search zsh`, You will see multiple add ons. Install with `brew install zsh-async`
  - The output when installed will give you a line that needs to be added to .zshrc file in order to work. It will look like `source Path2InstalledAddon`

## My zshrc file 

    PROMPT="%m:%~%# "
    # Path to your oh-my-zsh installation.
        export ZSH="$HOME/.oh-my-zsh"
        source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
        source /opt/homebrew/opt/powerlevel10k/powerlevel10k.zsh-theme
        source $ZSH/oh-my-zsh.sh
        source "/opt/homebrew/opt/zsh-git-prompt/zshrc.sh"
        source /opt/homebrew/share/zsh-you-should-use/you-should-use.plugin.zsh
        source /opt/homebrew/opt/zsh-fast-syntax-highlighting/share/zsh-fast-syntax-highlighting/fast-syntax-highlighting.plugin.zsh 
        source /opt/homebrew/share/zsh-history-substring-search/zsh-history-substring-search.zsh
        source "${HOME}/.iterm2_shell_integration.zsh"
        source /opt/homebrew/share/zsh-autopair/autopair.zsh

    # Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
    # Initialization code that may require console input (password prompts, [y/n]
    # confirmations, etc.) must go above this block; everything else may go below.
    if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
    source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
    fi


    # If you come from bash you might have to change your $PATH.
    # export PATH=$HOME/bin:/usr/local/bin:$PATH

    if type brew &>/dev/null; then
        FPATH=$(brew --prefix)/share/zsh-completions:$FPATH

        autoload -Uz compinit
        compinit
    fi
    ###################
    
    if command -v ngrok &>/dev/null; then
        eval "$(ngrok completion)"
    fi

    ######################


    ##########################

    if [ "$funcstack[1]" = "_gobuster" ]; then
        _gobuster
    fi

    ###########################

    # Set name of the theme to load --- if set to "random", it will
    # load a random theme each time oh-my-zsh is loaded, in which case,
    # to know which specific one was loaded, run: echo $RANDOM_THEME
    # See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
    # ZSH_THEME="powerlevel10k/powerlevel10k"
    source /opt/homebrew/opt/powerlevel10k/powerlevel10k.zsh-theme
    ## ^^ new way said to remove first theme decleration
    # Set list of themes to pick from when loading at random
    # Setting this variable when ZSH_THEME=random will cause zsh to load
    # a theme from this variable instead of looking in $ZSH/themes/
    # If set to an empty array, this variable will have no effect.
    # ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

    # Uncomment the following line to use case-sensitive completion.
    # CASE_SENSITIVE="true"

    # Uncomment the following line to use hyphen-insensitive completion.
    # Case-sensitive completion must be off. _ and - will be interchangeable.
    # HYPHEN_INSENSITIVE="true"

    # Uncomment one of the following lines to change the auto-update behavior
    # zstyle ':omz:update' mode disabled  # disable automatic updates
    # zstyle ':omz:update' mode auto      # update automatically without asking
    zstyle ':omz:update' mode reminder  # just remind me to update when it's 
    #time

    # Uncomment the following line to change how often to auto-update (in days).
    zstyle ':omz:update' frequency 4

    # Uncomment the following line if pasting URLs and other text is messed up.
    # DISABLE_MAGIC_FUNCTIONS="true"

    # Uncomment the following line to disable colors in ls.
    # DISABLE_LS_COLORS="true"

    # Uncomment the following line to disable auto-setting terminal title.
    # DISABLE_AUTO_TITLE="true"

    # Uncomment the following line to enable command auto-correction.
    # ENABLE_CORRECTION="true"

    # Uncomment the following line to display red dots whilst waiting for completion.
    # You can also set it to another string to have that shown instead of the default red dots.
    # e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
    # Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
    # COMPLETION_WAITING_DOTS="true"

    # Uncomment the following line if you want to disable marking untracked files
    # under VCS as dirty. This makes repository status check for large repositories
    # much, much faster.
    # DISABLE_UNTRACKED_FILES_DIRTY="true"

    # Uncomment the following line if you want to change the command execution time
    # stamp shown in the history command output.
    # You can set one of the optional three formats:
    # "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
    # or set a custom format using the strftime function format specifications,
    # see 'man strftime' for details.
    # HIST_STAMPS="mm/dd/yyyy"

    # Would you like to use another custom folder than $ZSH/custom?
    # ZSH_CUSTOM=/path/to/new-custom-folder

    # Which plugins would you like to load?
    # Standard plugins can be found in $ZSH/plugins/
    # Custom plugins may be added to $ZSH_CUSTOM/plugins/
    # Example format: plugins=(rails git textmate ruby lighthouse)
    # Add wisely, as too many plugins slow down shell startup.
    plugins=(
    zsh-navigation-tools
    git
    alias-finder
    aliases
    brew
    battery
    colored-man-pages
    colorize
    command-not-found
    common-aliases
    copybuffer
    copyfile
    copypath
    cp
    dircycle
    dirhistory
    dotenv
    emoji
    extract
    gem
    gh
    git
    git-extras
    git-flow
    git-lfs
    git-prompt
    gitfast
    github
    gitignore
    globalias
    gnu-utils
    golang
    history
    history-substring-search
    iterm2
    macos
    zbell
    mongocli
    mongo-atlas
    nmap
    node
    npm
    nvm
    perl
    pip
    pipenv
    postgres
    profiles
    pyenv
    rails
    ruby
    rvm
    safe-paste
    shell-proxy
    systemadmin
    systemd
    term_tab
    thefuck
    themes
    toolbox
    transfer
    torrent
    urltools
    virtualenv
    virtualenvwrapper
    vscode
    xcode
    web-search
    zsh-interactive-cd
    compleat
    )

    ### My aliases
    alias "speed=speedtest-cli"
    alias "en0=ifconfig en0"
    alias "spoofmymac=sudo spoof-mac randomize en0"
    alias "update-all=brew update && brew upgrade && omz 
    update"

    ### Proxychains Aliases
    alias "pc=proxychains4"
    alias "pcq=proxychains4 -q"
    alias "pcqf=proxychains4 -q -f"

    # Shows size of file/directory contents in human readble form
    alias "size=du -h"

    ## Metasploit aliases
    alias 'msf=msfconsole'
    alias "msfv=msfvenom"

    ## Prevents error on M1 machines w brew
    alias "brew=arch -arm64 brew"

    # pythons easier to type than python3...ever so slightly
    alias "python=python3"

    # See images in terminal, need catimg installed
    alias "see=catimg"

    #### Aliases for brew services because it's ann
    alias "bsl=brew services list"
    alias "bs=brew services"
    alias "bs-start=brew services start"
    alias "bs-stop=brew services stop"

    # some alias settings, just for fun
    # -------------------------------------------------------------------
    #alias 'today=calendar -A 0 -f ~/calendar/calendar.mark | sort'
    alias 'today=calendar -A 0 -f /usr/share/calendar/calendar.mark | sort'
    alias 'mailsize=du -hs ~/Library/mail'

    # -------------------------------------------------------------------
    # make some commands (potentially) less destructive
    # -------------------------------------------------------------------
    alias 'rm=rm -i'

    # -------------------------------------------------------------------
    # Git
    # -------------------------------------------------------------------
    alias ga='git add'
    alias gp='git push'
    alias gl='git log'
    alias gs='git status'
    alias gd='git diff'
    alias gm='git commit -m'
    alias gma='git commit -am'
    alias gb='git branch'
    alias gc='git checkout'
    alias gra='git remote add'
    alias grr='git remote rm'
    alias gpu='git pull'
    alias gcl='git clone'
    alias gta='git tag -a -m'
    alias gf='git reflog'

    # leverage an alias from the ~/.gitconfig

    ## These two are in the bin for hydra, a nice to know alias for ease of use with these tools
    alias hydra-wizard='hydra-wizard.sh'
    alias hw='hydra-wizard.sh'

    alias rake="noglob rake"
    # sort files in current directory by the number of words they contain
    alias 'wordy=wc -w * | sort | tail -n10'
    alias 'filecount=ls -aRF | wc -l'

    # -------------------------------------------------------------------
    # Functions ported directly from .bashrc
    # -------------------------------------------------------------------
    # turn hidden files on/off in Finder
    function hiddenOn() { defaults write com.apple.Finder AppleShowAllFiles YES ; }
    function hiddenOff() { defaults write com.apple.Finder AppleShowAllFiles NO ; }


    # view man pages in Preview
    function pman() { ps=`mktemp -t manpageXXXX`.ps ; man -t $@ > "$ps" ; open "$ps" ; }


    # nice mount (http://catonmat.net/blog/another-ten-one-liners-from-commandlingfu-explained)
    # displays mounted drive information in a nicely formatted manner
    function nicemount() { (echo "DEVICE PATH TYPE FLAGS" && mount | awk '$2="";1') | column -t 
    ; }

    # myIP address
    function myip() {
        ifconfig lo0 | grep 'inet ' | sed -e 's/:/ /' | awk '{print "lo0       : " $2}'
        ifconfig en0 | grep 'inet ' | sed -e 's/:/ /' | awk '{print "en0 (IPv4): " $2 " " $3 " " 
    $4 " " $5 " " $6}'
        ifconfig en0 | grep 'inet6 ' | sed -e 's/ / /' | awk '{print "en0 (IPv6): " $2 " " $3 " 
    " $4 " " $5 " " $6}'
        ifconfig en1 | grep 'inet ' | sed -e 's/:/ /' | awk '{print "en1 (IPv4): " $2 " " $3 " " 
    $4 " " $5 " " $6}'
        ifconfig en1 | grep 'inet6 ' | sed -e 's/ / /' | awk '{print "en1 (IPv6): " $2 " " $3 " 
    " $4 " " $5 " " $6}'
    }

    modify-wordlist() {
    # Check if a file was specified
    if [[ -z "$1" ]]; then
        echo "Error: No file specified."
        return 1
    fi

    # Check if the characters to add were specified
    if [[ -z "$2" ]]; then
        # Prompt the user for the characters to add
        print "Enter the characters to add to each word: "
        read characters
    else
        # Use the characters specified as a parameter
        characters=$2
    fi

    # Check if the file exists
    if [[ ! -f "$1" ]]; then
        echo "Error: File not found."
        return 1
    fi

    # Loop over each line in the file
    while read -r line; do
        # Capitalize the first letter of the word
        modified_line=$(echo "$line" | sed 's/\b[a-z]/\U&/')
        # Add the characters to the end of the word
        modified_line="$modified_line"$characters
        # Print the modified word
        echo "$modified_line"
    done < "$1"
    }


    lowercase() {
    tr '[:upper:]' '[:lower:]' < "$1" > "$1.txt" && mv "$1.txt" "$1"
    }

    #
    ## new functions
    #
    s() { pwd > ~/.save_dir ; }
    i() { cd "$(cat ~/.save_dir)" ; }

    # To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
    [[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
    POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=trueexport 
    PATH="/opt/homebrew/opt/libpcap/bin:$PATH"
    toilet Brendan -F metal | lolcat -p 1.0
    cat /opt/homebrew/Cellar/cowsay/3.04_1/share/cows/stegosaurus.cow
    export PATH="/opt/homebrew/opt/curl/bin:$PATH"


    # Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
    export PATH="$PATH:$HOME/.rvm/bin"

    function format-proxies {
    # Check if the required number of arguments is provided
    if [ $# -lt 2 ]; then
        echo "Usage: format-proxies <protocol> <filename>"
        return 1
    fi

    # Set the protocol and filename from the arguments
    local protocol=$1
    local filename=$2

    # Check if the file exists
    if [ ! -f "$filename" ]; then
        echo "Error: file not found: $filename"
        return 1
    fi

    # Read each line of the file and format the proxy
    while read -r line; do
        # Remove the colon and add a space
        proxy=$(echo "$line" | tr -d ':' | xargs)
        # Prefix the formatted proxy with the specified protocol
        echo "$protocol $proxy"
    done < "$filename"
    }


    eval $(thefuck --alias)

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

    export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"
    export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"
    export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"


**Feel free to use my file, or take anything from it you find useful**

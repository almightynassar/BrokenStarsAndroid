# Broken Stars

An android application built using [Cordova](https://cordova.apache.org/), [Vue.js](https://vuejs.org/) and [Vuetify](https://vuetifyjs.com/). This app is intended to help run the [Savage Worlds](https://www.peginc.com/product-category/savage-worlds/) Sci-Fi tabletop role-playing games. While most of the core mechanics remain the same, there are some 'homebrew' changes to suit the setting. These changes were inspired by the following:

 - [Savage Worlds - Science Fiction Companion](https://www.peginc.com/store/science-fiction-companion-le-bundle/) by Pinnacle
 - [Stars Without Number](http://www.drivethrurpg.com/product/86467/Stars-Without-Number-Free-Edition) by Kevin Crawford
 - [Stars Without Number - Suns of Gold](http://www.drivethrurpg.com/product/114950/Suns-of-Gold-Merchant-Campaigns-for-Stars-Without-Number) by Kevin Crawford
 - [Savage Space](https://chaosmeister.wordpress.com/savage-worlds-character-sheet-savage-space-downloads/">) by Marcus Burggraf
 - [GURPS Traveller](http://www.sjgames.com/gurps/traveller/books.html) by Steve Jackson Games

Released using the [Apache License 2.0](http://www.apache.org/licenses/).

**NOTE: The app uses HTML5 technology (such as localstorage and indexedDB) that should be supported by modern browsers. However, you may experience some difficulties. If you come across an issue, try using another browser (also report the error here so I can try to fix it)**

# Contributing

Most of the data used by the app is stored in `src/data`. For example, the Markov Generator builds it's chains from the names in `src/data/names/`, while the Sector Map loads it's regional data from `src/data/regions/`.

If you know anything about JSON formats and how to 'fork' a github repository, then you are halfway to forking your repo and making a pull request with your changes. For the less technical, you can simply leave an Issue with your ideas, enhancements, and lists.

We'll quickly go through some of more tricky areas that may trip you up.

## Region Generator tool

The in-built **Region Generator** tool allows you to generate a star system with planets, stars, and gas giants. The tool was created because it is difficult to manually keep track of all of the complex interactions in the region system. Putting in invalid values may break the application, or you may not trigger your desired planetary tags.

Once you have completed the region using the tool, use the '**Copy to Clipboard**' button to copy a text version of the region. (Make sure you do not overwrite an existing sector at the x-y coordinates).

You can then submit the region as a new Enhancement issue and it will be added by the core team (just give us some time).

If you want to tackle it yourself, create a new '**.js**' file in `/src/data/regions/` folder of the project and then paste the contents of the generator into that file.

## Planetary Tags

All of the tags for planets (and the rules for generating them) are defined in the `/src/data/templates/region/tags.js` file. To create a new tag definition, add a new object to the **tags** array with the following:

 - **tag**: The tag name that will be added to the planet if it qualifies.
 - **mandatory**: The list of criteria that the planet must meet if the tag is to be applied. Each criteria key must be a planetary property that is tested, and the criteria value array is a list of acceptable values that the planet can have.
 - **optional**: The planet must meet at least one of the criteria listed here, if any are listed at all.

## Ship fittings and weapons

The fittings are defined in `/src/data/templates/fittings.js`. Storage, Power, and Crew values should be negative unless the fitting adds those resources to the ship.

Weapons are stored in `/src/data/templates/weapons.js` and is defined like fittings, just without the crew property. It instead lists damage, weapon range, rate of fire and how many hardpoints it consumes.

# How to make (Linux)

These instructions were done with an Ubuntu based distro. You may need to make changes for your distro (i.e. swap apt-get for yum, e.t.c)

1. Install system requirements:
    ```
    sudo apt-get install npm gradle git
    ```
1. Install 32-bit libraries that Android might need
    ```
    sudo apt-get install libc6:i386 libncurse5:i386 libstdc++6:i386
    ```
1. Install the official Java environment (make sure it is version 8)
    ```
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt-get update
    sudo apt-get install oracle-java8-installer
    sudo apt-get install oracle-java8-set-default
    ```
1. Download the [official Android SDK](https://developer.android.com/studio/index.html) (I only installed the tools since I use another editor)
1. Install cordova (the weak link; expect LOT'S of issues getting this to work consistently), the latest npm and n
    ```
    sudo npm install -g cordova npm n
    ```
1. Install the latest node version
    ```
    sudo n stable
    ```
1. Uninstall the outdate npm and node version that come with the distro
    ```
    sudo apt-get purge npm nodejs
    ```
1. Link latest node version to our path
    ```
    sudo update-alternatives --install /usr/bin/node node /usr/local/n/versions/[version_number]/bin/node 10
    ```
1. Extract the downloaded SDK to ~/Android/sdk
1. Edit ~/.bashrc and add the following lines
    ```
    ANDROID_HOME = ~/Android/sdk
    PATH = $PATH:~/Android/sdk/tools/bin
    export ANDROID_HOME
    export PATH
    ```
1. Import these new terminal settings
    ```
    source ~/.bashrc
    ```
1. Install platforms and tool
    ```
    sdkmanager "platforms;android-25" "system-images;android-25;google_apis;x86_64" "build_tools;25.0.0"
    ```
1. New devices may require a restart of adb
    ```
    sudo ~/Android/sdk/platform-tools/adb kill-server
    sudo ~/Android/sdk/platform-tools/adb start-server
    ```
1. Use cordova to make a new project, and then use git to import the source code into the new project. You may need to add the android and browser platforms. **These steps are not tested as your situation may be different!**
    ```
    cordova create BrokenStarsAndroid
    cd BrokenStarsAndroid
    git init
    git remote add origin [git_url]
    git pull origin
    cordova platform add android
    cordova platform add browser
    mkdir www
    ```
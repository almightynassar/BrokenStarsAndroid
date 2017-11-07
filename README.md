# Broken Stars Android Application

A simple cordova-based android application I use to help define my sci-fi game world.

Released using the Apache License 2.0.

## Contributing
___

You can contribute to the project in the following ways:

### New Regions / Sectors

The easiest way to add a new region is to use the in-built Region generator tool. Once you have completed the region, use the '**Copy to Clipboard**' button to copy a text version of the region.

You must then create a new '**.js**' file in `/src/data/regions/` folder of the project and then paste the contents into that file (making sure you do not overwrite an existing sector at the x-y coordinates). Otherwise, create an enhancement issue for this project and copy-paste your sector there.

### New Sector / Planet categories and tags

All of the categories for sectors and planets are defined in the `/src/data/templates/regions.js` file, specifically under the **categories** property. Categories are stored as a key => value pair (or as key => description). Feel free to extend these and make a pull request to expand the project! ___Please note that the corresponding .vue files may need to be updated as well.___

Tag definitions are stored in the `/src/data/templates/region/tags.js` file. To create a new tag definition, add a new object to the **tag** property array with the following:

 - **tag**: The tag name that will be added to the planet if it qualifies.
 - **mandatory**: The list of criteria that the planet must meet if the tag is to be applied. Each criteria key must be a planetary property that is tested, and the criteria value array is a list of acceptable values that the planet can have.
 - **optional**: The planet must meet at least one of the criteria listed here, if any are listed at all.

### New Ship fittings and weapons

The fittings are defined in `/src/data/templates/fittings.js` and must be defined as follows:

```
{
    id: "Unique identity string",
    name: "Human readable name",
    storage: "-ve number to show how much space it uses",
    power: "-ve number to show how much power it uses",
    crew: "+ve number to show how much crew space it gives",
    cost: "How much it costs",
    description: "A simple description"
}
``` 

Weapons are stored in `/src/data/templates/weapons.js` and is defined like normal fittings (without the crew property) but has the following additional properties:

```
{
    ...
    damage: "How much damage to roll id d-notation",
    range: "A number that represents a unit of distance",
    rof: "A number that represents the rate of fire,
    hardpoints: "-ve number to show how much hardpoints it uses"
}
```

## How to make (Linux)
___

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
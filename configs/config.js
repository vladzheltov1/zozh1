let config = {
    version: '1.0d'
}

function getCurrentVersion() {
    return this.config.version;
}

// TODO: find out a way to write a config in separate files with ext .js
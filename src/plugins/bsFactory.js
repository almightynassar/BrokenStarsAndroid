export default {
  // Local Data storage
  data: {
    templates: null,
    names: {}
  },
  // Load template data files
  loadTemplates(values) {
    if (typeof values === "object" && values !== null) {
      this.data.templates = values;
    } else {
      this.data.templates = {};
    }
    return this.data.templates;
  },
  // Load name data files
  loadNames(values) {
    if (this.data.templates.names !== "object" || this.data.templates.names === null) {
      console.log("Names object template is undefined");
    }
    if (Array.isArray(values) && values !== null) {
      var self = this;
      values.forEach(function (v) {
        self.data.names[v.name] = Object.create(self.data.templates.names);
        self.data.names[v.name].construct(v.list);
      });
    } else {
      this.data.names = {};
    }
    return this.data.names;
  },
  // Required Vue plugin installation function
  install(Vue, options) {
    var self = this;
    Vue.prototype.$bsFactory = {
      getTemplate(list) {
        if (self.data.templates[list] !== "object" || self.data.templates[list] === null) {
          console.log(list + " object template is undefined");
        }
        return self.data.templates[list];
      },
      getNames() {
        if (self.data.names !== "object" || self.data.names === null) {
          console.log("Names object template is undefined");
        }
        return self.data.names;
      },
      getNameGenerator(list) {
        if (self.data.templates.names !== "object" || self.data.templates.names === null) {
          console.log("Names object template is undefined");
        }
        return self.data.names[list];
      }
    };
  }
};
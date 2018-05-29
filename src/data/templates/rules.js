import Actions from "./rules/actions"
import Core from "./rules/core"
import Skills from "./rules/skills"
import Status from "./rules/status"
export default {
    /**
     * Get the description
     * 
     * @param {String} type 
     */
    getDescription(type) {
        let result = 'Default'
        switch (type) {
            case 'action':
                result =  Actions.description
                break;
            case 'core':
                result = Core.description
                break;
            case 'skills':
                result = Skills.description
                break;
            case 'status':
                result = Status.description
                break;
        }
        return result
    },
    /**
     * Get a list of the rules
     * 
     * @param {*} flags
     */
  getList(flags) {
    let result = []
    if (flags.action) {
        result = result.concat(Actions.rules.map((obj) => {
            obj.type = 'Actions';
            return obj;
        }))
    }
    if (flags.core) {
        result = result.concat(Core.rules.map((obj) => {
            obj.type = 'Core';
            return obj;
        }))
    }
    if (flags.skills) {
        result = result.concat(Skills.rules.map((obj) => {
            obj.type = 'Skills';
            return obj;
        }))
    }
    if (flags.status) {
        result = result.concat(Status.rules.map((obj) => {
            obj.type = 'Status';
            return obj;
        }))
    }
    return result
  },
}
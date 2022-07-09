
const DocusaurusTheme = require("docusaurus-plugin-typedoc/dist/theme").DocusaurusTheme;


class JHooksTheme extends DocusaurusTheme {
    render(page) {
        const allRules = [
            this.removeModuleTitle,
            this.removeReturnSource,
            this.formatDemoTitle,
            this.addDetailTitle,
            this.updateLevel,
            this.translate
        ];
        const result = allRules.reduce((pageRsult, fn) => fn(pageRsult), page.template(page));
        return result;
    }

    removeModuleTitle(content) {
        return content.replace(/## (Functions|Modules)*?\n/,'');
    }

    removeReturnSource(content) {
        return content.replace(/(#### Returns[\s\S]*?▸.*?\n)[\s\S]*?(\n#### )/,'$1$2');
    }

    formatDemoTitle(content) {
        const firstDemoResult = content.replace(/\*\*`example`\*\* (.*?)\n/,'### Example\n\n#### $1\n\n');
        const otherDemoResult = firstDemoResult.replace(/\*\*`example`\*\* (.*?)\n/g,'### $1\n\n');
        return otherDemoResult
    }
    
    addDetailTitle(content) {
        return content.replace(/(#### (Type parameters|Parameters|Returns))/,'### API\n\n$1');
    }

    updateLevel(content) {
        return content.replace(/(#+)#/g, '$1');
    }

    translate(content) {
        const chineseMap = {
            Example: '代码演示',
            'Type parameters': '类型参数',
            Parameters: '参数',
            Returns: '输出',
            Name: '名称',
            Description: '描述',
            Type: '类型',
            Returns: '输出',
            'Default value': '默认值',
            'Defined in': '代码位置',
        };
        return Object.keys(chineseMap).reduce((pageResult, key) => pageResult.replace(new RegExp(key, 'g'), chineseMap[key]), content)
    }
}

function load(app) {
    app.renderer.defineTheme('jhooks', JHooksTheme);
    app.renderer.hooks.on("body.begin", (content) => {
        console.log('body.begin');
        return content
    });
    app.renderer.hooks.on("body.end", (content) => {
        console.log('body.end');
        return content
    });
}


exports.load = load;
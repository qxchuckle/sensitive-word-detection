## 敏感词检测

> 本插件是[vsc-cec-ide](https://github.com/qxchuckle/vsc-cec-ide)敏感词检测功能的独立版本

VSCode插件市场[敏感词检测](https://marketplace.visualstudio.com/items?itemName=qcqx.sensitive-word-detection)，Open VSX：[敏感词检测](https://open-vsx.org/extension/qcqx/sensitive-word-detection)，下载vsix可前往[releases](https://github.com/qxchuckle/sensitive-word-detection/releases)

在任意文件，右键，点击敏感词检测，将会持续检测该文件是否有敏感词，若文件关闭或没有敏感词，则停止检测。右键点击停止检测敏感词可以手动停止检测。即使换行(最多隔一行)且隔着干扰字符也能检测到。

**快捷键:** `alt+shift+m` 检测，`alt+shift+n` 停止检测。

**命令:**敏感词支持**热重载**
1. `自定义敏感词` 上传自定义敏感词txt文件，格式：一行一个敏感词。
2. `重置敏感词` 重置为插件自带的敏感词。

![image](https://github.com/qxchuckle/vsc-cec-ide/assets/55614189/9ef1cf17-5c01-4cc5-86ce-dd879e0dc60e)

有快速修复功能，一键替换该敏感词或所有敏感词为***

点击右下角状态栏按钮，也能开始检测或停止检测，且在检测中会显示当前活动编辑器含有的敏感词数。

![image](https://github.com/qxchuckle/vsc-cec-ide/assets/55614189/ecfaa61c-d369-446b-9ec6-7e2b8f559ee7)

敏感词来源：[tencent-sensitive-words](https://github.com/cjh0613/tencent-sensitive-words) 【有删改】


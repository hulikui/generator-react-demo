// /generators/app/index.js

// 创建 yeoman generator 的核心功能模块.
const Generator = require('yeoman-generator');

// 文件读写模块.
const fs = require('fs');
// 路径模块
const path = require('path');

// PS: fs 和 path 是 NodeJS 的核心模块，无需安装.

/**
 * Base generator.
 */
module.exports = class extends Generator {

  /** 构造函数 */
  constructor(args, opts) {
    // 继承必须.
    super(args, opts);

    // 获取 projectName，使用路径尾.
    this.projectName = path.basename(process.cwd());
    // 设置 Author.
    this.appAuthor = "Likui Hu";
  }

  /**
   * 初始化方法.
   */
  initializing() {
    this.log("Start building a project: ", this.projectName);
  }

  /**
   * 写入配置
   */
  configuring() {

    // 获取 package 配置模板.
    let defaultSettings = this.fs.readJSON( this.templatePath('package.json') );
    // 做新 package 配置文件.
    let packageSettings = {
      name: this.projectName,
      private: true,
      version: defaultSettings.version,
      description: defaultSettings.description || `${this.projectName}`,
      main: 'index.js',
      scripts: defaultSettings.scripts,
      repository: defaultSettings.repository,
      keywords: defaultSettings.keywords,
      author: this.appAuthor,
      devDependencies: defaultSettings.devDependencies,
      dependencies: defaultSettings.dependencies
    };

    // 写入 package.json.
    console.log('Setting package.json: ', packageSettings);
    this.fs.writeJSON(this.destinationPath('package.json'), packageSettings);
  }

  /**
   * 写入文件
   */
  writing() {

    const projectName = this.projectName;
    const projectPath = process.cwd() + '/' + projectName;

    if(projectName) {
      fs.mkdirSync(`${projectName}`);
      process.chdir(projectPath);
    }
    console.log('Copying files: ', this.destinationPath(projectPath,"/src"));

    /* 拷贝所需的文件. */

    this.fs.copy(
      this.templatePath("src"),
      this.destinationPath(projectPath,"/src")
    );
    console.log('-------copy react-component--------');
    this.fs.copy(
      this.templatePath("mock"),
      this.destinationPath(projectPath,"/mock")
    );
    console.log('-------copy node mock frame--------');
    this.fs.copy(
      this.templatePath("build"),
      this.destinationPath(projectPath,"/build")
    );
    console.log('-------copy webpack config--------');
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(projectPath,"/.gitignore")
    );
    this.fs.copy(
      this.templatePath(".babelrc"),
      this.destinationPath(projectPath,"/.babelrc")
    );
    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath(projectPath,"/README.md")
    );


  }

  /**
   * 安装方法
   */
  install() {
    // 安装 package 安装.
    this.installDependencies({ bower: false });
  }

  end() {
    this.log('Successfully constructed.');
  }
};
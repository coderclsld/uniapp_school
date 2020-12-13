# 华软_基于uniapp的仿知乎的校园社区小程序

#### 介绍
主要是使用uniapp框架搭建微信小程序，因为做一半因为某些原因转型微信小程序原生了，所以就没有在继续维护完善下去了。

#### 软件效果
![输入图片说明](https://images.gitee.com/uploads/images/2020/1214/001933_d657f361_5688172.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2020/1214/001959_907dc7bc_5688172.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2020/1214/002009_00fb983b_5688172.png "屏幕截图.png")
![输入图片说明](https://images.gitee.com/uploads/images/2020/1214/002029_dd65873b_5688172.png "屏幕截图.png")

#### 使用说明
下载项目后用Hbuilder打开项目，下载编译插件和下载scss编译插件，点击右上方运行行到小程序，绑定小程序启动exe，即可自动启动小程序。

#### 原理

框架是基于vue的，对会vue和小程序语法的人，学习成本不高，框架有些地方还不太完善。文档参考hbuilder的官网dcould中有关于uniapp使用文档的说明，一些组件和UI库也在官网社区中有设计。uniapp主要是写vue的语法编译生成微信小程序的语法，编译完成后的文件在项目根目录下unpackage\dist\dev\mp-weixin里面，这里面是编译完成的文件，可以直接使用微信开发者工具打开此目录进行运行，不足之处是，打包生成的文件有很多画龙画虎的地方，有很多的不知名注解，不是人可以观看的。所以不要妄想能将文件分离出来。
![输入图片说明](https://images.gitee.com/uploads/images/2020/1214/003037_f885ce5b_5688172.png "屏幕截图.png")

module.exports = 
{
  "base": "",
  "title": "服务端Wiki",
  "description": "服务端Wiki",
  "dest": "dist",
  "themeConfig": {
    "displayAllHeaders": "true",
    "logo": "assets/img/logo.png",
    "nav": [{
      "text": "团队",
      "link": "/team/",
      "ariaLabel": "Team"

    }, {
      "text": "技术",
      "link": "/tech/",
      "ariaLabel": "tech",
      "items": [{
        "text": "自研组件",
        "link": "/tech/module/"
      }, {
        "text": "技术分享",
        "link": "/tech/share/"
      }]
    }, {
      "text": "项目",
      "link": "/project/",
      "ariaLabel": "project",
      "items": [{
        "text": "TodoList",
        "link": "/project/todo/"
      }, {
        "text": "项目复盘",
        "link": "/project/replay/"
      }]
    }, {
      "text": "规划",
      "link": "/plan/",
      "ariaLabel": "plan",
      "items": [{
        "text": "技术规划",
        "link": "/plan/tech/"
      }, {
        "text": "业务规划",
        "link": "/plan/business/"
      }]
    }, {
      "text": "资源",
      "link": "/resource/"
    }],
    "sidebar": {
      "/team/": [{
        "title": "团队",
        "path": "/team/",
        "sidebarDepth": 2,
        "children": [{
          "title": "团队介绍",
          "path": "/team/intro/",
          "children": [{
            "title": "团队介绍",
            "path": "/team/intro/tuanduijieshao"
          }, {
            "title": "业务介绍",
            "path": "/team/intro/yewujieshao"
          }]
        }, {
          "title": "新人引导",
          "path": "/team/new/",
          "children": [{
            "title": "入职引导",
            "path": "/team/new/ruzhiyindao"
          }, {
            "title": "名词解释",
            "path": "/team/new/mingcijieshi"
          }]
        }]
      }],
        "/tech/": [{
        "title": "技术",
        "path": "/tech/",
        "sidebarDepth": 2,
        "children": [{
          "title": "组件",
          "path": "/tech/module/",
          "children": [{
            "title": "组件清单",
            "path": "/tech/module/zujianqingdan"
          }]
        }, {
          "title": "分享",
          "path": "/tech/share/",
          "children": [{
            "title": "技术分享",
            "path": "/tech/share/jishufenxiang"
          }, {
            "title": "学习总结",
            "path": "/tech/share/xuexizongjie"
          }]
        }]
      }]
    }
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        "@img": "assets/img",
        "@css": "assets/css",
        "@js": "assets/js"
      }
    }
  }
}
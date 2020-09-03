module.exports = 
{
    "base": "",
    "title": "服务端Wiki",
    "description": "服务端Wiki",
    "dest": "dist",
    "plugins": {
        "vuepress-plugin-auto-sidebar": {
            "sidebarDepth": 1,
            "collapsable": true,
            "nav": true
        }
    },
    "themeConfig": {
        "displayAllHeaders": "true",
        "logo": "/assets/img/logo.png",
        "nav": [{
                "text": "团队",
                "link": "/team/",
                "ariaLabel": "Team",
                "items": [{
                        "text": "团队介绍",
                        "link": "/team/introduction/"
                    },
                    {
                        "text": "新人导读",
                        "link": "/team/newcomer/"
                    }
                ]
            },
            {
                "text": "研发",
                "link": "/tech/",
                "ariaLabel": "tech",
                "items": [
                    {
                        "text": "研发助手",
                        "link": "/tech/assistant/"
                    },
                    {
                        "text": "约定规范",
                        "link": "/tech/rule/"
                    },
                    
                    {
                        "text": "研发流程",
                        "link": "/tech/flow/"
                    },
                    {
                        "text": "研发组件",
                        "link": "/tech/module/"
                    }, {
                        "text": "未来可期",
                        "link": "/tech/todo/"
                    }
                ]
            },
            {
                "text": "项目",
                "link": "/project/",
                "ariaLabel": "project",
                "items": [
                    {
                        "text": "项目复盘",
                        "link": "/project/replay/"
                    },{
                        "text": "未来可期",
                        "link": "/project/todo/"
                    }
                ]
            },
            {
                "text": "成长",
                "link": "/share/",
                "items": [{
                        "text": "技术分享",
                        "link": "/share/tech/"
                    },
                    {
                        "text": "其他分享",
                        "link": "/share/other/"
                    }
                ]
            }
        ]
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
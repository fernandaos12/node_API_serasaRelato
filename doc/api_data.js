define({ "api": [
  {
    "type": "get",
    "url": "/client",
    "title": "get home autentication api",
    "version": "1.0.0",
    "name": "Get",
    "group": "Serasa",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authenticate",
            "description": "<p>serasa</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/clientController.js",
    "groupTitle": "Serasa"
  },
  {
    "type": "get",
    "url": "/client/cpf/:cpf",
    "title": "Update a task",
    "version": "1.0.0",
    "name": "Get",
    "group": "Serasa",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>from user</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/clientController.js",
    "groupTitle": "Serasa"
  },
  {
    "type": "get",
    "url": "/client/cnpj/:cnpj",
    "title": "Update a task",
    "version": "1.0.0",
    "name": "Get",
    "group": "Serasa",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>from user</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/clientController.js",
    "groupTitle": "Serasa"
  },
  {
    "type": "get",
    "url": "/client",
    "title": "get home autentication api",
    "version": "1.0.0",
    "name": "Get",
    "group": "Serasa",
    "permission": [
      {
        "name": "authenticated user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authenticate",
            "description": "<p>serasa</p>"
          }
        ]
      }
    },
    "filename": "src/services/clientService.js",
    "groupTitle": "Serasa"
  }
] });

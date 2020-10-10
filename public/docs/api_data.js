define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/docs/main.js",
    "group": "/Users/wilfred/Documents/projects/mmo/public/docs/main.js",
    "groupTitle": "/Users/wilfred/Documents/projects/mmo/public/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/investor/create/",
    "title": "investor/create",
    "name": "invester/create",
    "group": "Investor",
    "description": "<p>Creates an investor user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>picture of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>phone number of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthDate",
            "description": "<p>date of birth of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of investor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isNewbie",
            "description": "<p>whether investor is a newbie or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amountWillingToRisk",
            "description": "<p>amount investor is willing to risk.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isAwareOfScams",
            "description": "<p>whether the investor is aware of scams or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hasbeenScammed",
            "description": "<p>whether the investor has been scammed or not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"test\",\n  \"gender\": \"test\",\n  \"email\": \"email@mmo.com\",\n  \"picture\": \"test\",\n \"password\": \"test\",\n  \"phoneNumber\": \"test\",\n  \"birthDate\": \"01-01-1990\",\n  \"location\": \"test\",\n  \"isNewbie\": false,\n  \"amountWillingToRisk\": \"100\",\n  \"isAwareOfScams\": false,\n  \"hasBeenScammed\": false\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Investor created successfully..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n   \"statusCode\": 200,\n   \"message\": \"Investor created successfully.\"\n}",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "500 Internal server error": [
          {
            "group": "500 Internal server error",
            "optional": false,
            "field": "message",
            "description": "<p>Internal server error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n   \"statusCode\": 500,\n   \"message\": \"Internal server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/investors.js",
    "groupTitle": "Investor"
  }
] });

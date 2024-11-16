import requests
import json
import dotenv

port = 4000
url = f"http://localhost:{port}/api/postRanking"

datas = '''[
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  },
  {
    "rank": "8",
    "teamName": "ShilohDiCaprio (Munnazzar)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "2:15:04:14"
      },
      {
        "status": "Accepted",
        "time": "2:15:32:56"
      },
      {
        "status": "Accepted",
        "time": "2:15:36:50"
      },
      {
        "status": "Accepted",
        "time": "2:16:05:21"
      }
    ]
  }
]
'''

data = json.loads(datas)

response = requests.post(url=url, json={"data": datas, "room": "21k"}, headers={"key": "1234"})

print(response.json)

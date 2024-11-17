import requests
import json
import dotenv

port = 4000
url = f"http://localhost:{port}/api/postRanking"

datas = '''[
  {
    "rank": "1",
    "penaltyMinutes": "143",
    "teamName": "Owais_Ali_Khan (snowden_03)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:05:49",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "0:39:33",
        "penalty": "(-1)"
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "1:02:49",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "0:15:08",
        "penalty": ""
      }
    ],
    "A": "0:05:49",
    "B": "0:39:33",
    "C": "",
    "D": "1:02:49",
    "E": "0:15:08"
  },
  {
    "rank": "3",
    "penaltyMinutes": "224",
    "teamName": "ZulqarnainWarsi (mwarsi2784)",
    "score": "4",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:03:52",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "0:45:43",
        "penalty": "(-1)"
      },
      {
        "status": "Accepted",
        "time": "1:20:13",
        "penalty": "(-1)"
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-3)"
      },
      {
        "status": "Accepted",
        "time": "0:54:44",
        "penalty": ""
      }
    ],
    "A": "0:03:52",
    "B": "0:45:43",
    "C": "1:20:13",
    "D": "",
    "E": "0:54:44"
  },
  {
    "rank": "4",
    "penaltyMinutes": "150",
    "teamName": "abdulrahim (abdul rahim)",
    "score": "3",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:05:12",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "1:17:38",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-4)"
      },
      {
        "status": "Accepted",
        "time": "1:07:14",
        "penalty": ""
      }
    ],
    "A": "0:05:12",
    "B": "",
    "C": "1:17:38",
    "D": "",
    "E": "1:07:14"
  },
  {
    "rank": "5",
    "penaltyMinutes": "151",
    "teamName": "CodeFlow (Coders)",
    "score": "3",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:06:35",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "1:27:26",
        "penalty": "(-1)"
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "0:37:39",
        "penalty": ""
      }
    ],
    "A": "0:06:35",
    "B": "1:27:26",
    "C": "",
    "D": "",
    "E": "0:37:39"
  },
  {
    "rank": "6",
    "penaltyMinutes": "176",
    "teamName": "Team_CPC (RameelCool911)",
    "score": "3",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:19:01",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "1:17:51",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "1:19:12",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      }
    ],
    "A": "0:19:01",
    "B": "1:17:51",
    "C": "1:19:12",
    "D": "",
    "E": ""
  },
  {
    "rank": "7",
    "penaltyMinutes": "61",
    "teamName": "itHurtsSoMuch",
    "score": "2",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:09:12",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "0:31:50",
        "penalty": "(-1)"
      }
    ],
    "A": "0:09:12",
    "B": "",
    "C": "",
    "D": "",
    "E": "0:31:50"
  },
  {
    "rank": "8",
    "penaltyMinutes": "75",
    "teamName": "shayan562",
    "score": "2",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:07:05",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-1)"
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "0:48:39",
        "penalty": "(-1)"
      }
    ],
    "A": "0:07:05",
    "B": "",
    "C": "",
    "D": "",
    "E": "0:48:39"
  },
  {
    "rank": "9",
    "penaltyMinutes": "94",
    "teamName": "Mehdi_Zain (Ali Zain)",
    "score": "2",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:34:20",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Accepted",
        "time": "1:00:37",
        "penalty": ""
      }
    ],
    "A": "0:34:20",
    "B": "",
    "C": "",
    "D": "",
    "E": "1:00:37"
  },
  {
    "rank": "11",
    "penaltyMinutes": "7",
    "teamName": "k213374 (Donga Gali)",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:07:58",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-1)"
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      }
    ],
    "A": "0:07:58",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "12",
    "penaltyMinutes": "9",
    "teamName": "naturaldisasters (natural disasters)",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:09:02",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-1)"
      }
    ],
    "A": "0:09:02",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "13",
    "penaltyMinutes": "21",
    "teamName": "hadiarshad",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:21:15",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-1)"
      }
    ],
    "A": "0:21:15",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "14",
    "penaltyMinutes": "21",
    "teamName": "K214833",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:21:44",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-2)"
      }
    ],
    "A": "0:21:44",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "15",
    "penaltyMinutes": "27",
    "teamName": "bilalsohailmirza (bilalmirza)",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:27:01",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-2)"
      }
    ],
    "A": "0:27:01",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "16",
    "penaltyMinutes": "27",
    "teamName": "3822_team_name1",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:27:47",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-1)"
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      }
    ],
    "A": "0:27:47",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "17",
    "penaltyMinutes": "32",
    "teamName": "hamzaaltaf4555 (hamza)",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:32:07",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      }
    ],
    "A": "0:32:07",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  },
  {
    "rank": "18",
    "penaltyMinutes": "32",
    "teamName": "bilalxahmd (Billo)",
    "score": "1",
    "problems": [
      {
        "status": "Accepted",
        "time": "0:32:40",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Not attempted",
        "time": "",
        "penalty": ""
      },
      {
        "status": "Failed",
        "time": "",
        "penalty": "(-4)"
      }
    ],
    "A": "0:32:40",
    "B": "",
    "C": "",
    "D": "",
    "E": ""
  }
]
'''

data = json.loads(datas)

response = requests.post(url=url, json={"data": datas, "batch": "23k"}, headers={"key": "1234"})

print(response.json)

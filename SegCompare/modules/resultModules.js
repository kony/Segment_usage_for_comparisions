// weatherData["result1"]["list"][i]["main"]["temp"]
// weatherData["result1"]["list"][i]["main"]["humidity"]
// weatherData["result1"]["list"][i]["wind"]["speed"]
// weatherData["result1"]["list"][i]["dt_txt"]
// weatherData["result1"]["list"][i]["weather"][0]["icon"]
function appInitModules(){
records={
  "data_hyd":{
  "city": {
    "id": 1269843,
    "name": "Hyderabad",
    "coord": {
      "lon": 78.474442,
      "lat": 17.37528
    },
    "country": "IN",
    "population": 0,
    "sys": {
      "population": 0
    }
  },
  "cod": "200",
  "message": 0.0118,
  "cnt": 37,
  "list": [
    {
      "dt": 1462784400,
      "main": {
        "temp": 308.27,
        "temp_min": 307.453,
        "temp_max": 308.27,
        "pressure": 962.03,
        "sea_level": 1019.77,
        "grnd_level": 962.03,
        "humidity": 49,
        "temp_kf": 0.82
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 1.5,
        "deg": 174
      },
      "rain": {
        "3h": 1.505
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-09 09:00:00"
    },
    {
      "dt": 1462795200,
      "main": {
        "temp": 307.39,
        "temp_min": 306.776,
        "temp_max": 307.39,
        "pressure": 961.05,
        "sea_level": 1018.69,
        "grnd_level": 961.05,
        "humidity": 40,
        "temp_kf": 0.61
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.21,
        "deg": 79.5033
      },
      "rain": {
        "3h": 0.63
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-09 12:00:00"
    },
    {
      "dt": 1462806000,
      "main": {
        "temp": 302.3,
        "temp_min": 301.892,
        "temp_max": 302.3,
        "pressure": 963.07,
        "sea_level": 1021.29,
        "grnd_level": 963.07,
        "humidity": 55,
        "temp_kf": 0.41
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.41,
        "deg": 87.0025
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-09 15:00:00"
    },
    {
      "dt": 1462816800,
      "main": {
        "temp": 299.1,
        "temp_min": 298.898,
        "temp_max": 299.1,
        "pressure": 963.98,
        "sea_level": 1022.55,
        "grnd_level": 963.98,
        "humidity": 66,
        "temp_kf": 0.2
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 2.56,
        "deg": 113.508
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-09 18:00:00"
    },
    {
      "dt": 1462827600,
      "main": {
        "temp": 297.17,
        "temp_min": 297.17,
        "temp_max": 297.17,
        "pressure": 962.83,
        "sea_level": 1021.53,
        "grnd_level": 962.83,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.76,
        "deg": 138.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-09 21:00:00"
    },
    {
      "dt": 1462838400,
      "main": {
        "temp": 296.155,
        "temp_min": 296.155,
        "temp_max": 296.155,
        "pressure": 963.89,
        "sea_level": 1022.63,
        "grnd_level": 963.89,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 0.61,
        "deg": 213.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 00:00:00"
    },
    {
      "dt": 1462849200,
      "main": {
        "temp": 302.549,
        "temp_min": 302.549,
        "temp_max": 302.549,
        "pressure": 965.62,
        "sea_level": 1024.04,
        "grnd_level": 965.62,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.82,
        "deg": 73.0004
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-10 03:00:00"
    },
    {
      "dt": 1462860000,
      "main": {
        "temp": 308.897,
        "temp_min": 308.897,
        "temp_max": 308.897,
        "pressure": 964.79,
        "sea_level": 1022.61,
        "grnd_level": 964.79,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.17,
        "deg": 152.002
      },
      "rain": {
        "3h": 0.025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-10 06:00:00"
    },
    {
      "dt": 1462870800,
      "main": {
        "temp": 303.573,
        "temp_min": 303.573,
        "temp_max": 303.573,
        "pressure": 962.93,
        "sea_level": 1020.46,
        "grnd_level": 962.93,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 0.11,
        "deg": 129
      },
      "rain": {
        "3h": 4.71
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-10 09:00:00"
    },
    {
      "dt": 1462881600,
      "main": {
        "temp": 307.158,
        "temp_min": 307.158,
        "temp_max": 307.158,
        "pressure": 961.5,
        "sea_level": 1019.13,
        "grnd_level": 961.5,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.87,
        "deg": 55.5013
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-10 12:00:00"
    },
    {
      "dt": 1462892400,
      "main": {
        "temp": 301.981,
        "temp_min": 301.981,
        "temp_max": 301.981,
        "pressure": 963.37,
        "sea_level": 1021.51,
        "grnd_level": 963.37,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.95,
        "deg": 36.0031
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 15:00:00"
    },
    {
      "dt": 1462903200,
      "main": {
        "temp": 299.587,
        "temp_min": 299.587,
        "temp_max": 299.587,
        "pressure": 964.09,
        "sea_level": 1022.6,
        "grnd_level": 964.09,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.77,
        "deg": 79.0004
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 18:00:00"
    },
    {
      "dt": 1462914000,
      "main": {
        "temp": 298.424,
        "temp_min": 298.424,
        "temp_max": 298.424,
        "pressure": 962.95,
        "sea_level": 1021.47,
        "grnd_level": 962.95,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.03,
        "deg": 131.004
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 21:00:00"
    },
    {
      "dt": 1462924800,
      "main": {
        "temp": 297.172,
        "temp_min": 297.172,
        "temp_max": 297.172,
        "pressure": 962.8,
        "sea_level": 1021.47,
        "grnd_level": 962.8,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 1.16,
        "deg": 168.501
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 00:00:00"
    },
    {
      "dt": 1462935600,
      "main": {
        "temp": 304.265,
        "temp_min": 304.265,
        "temp_max": 304.265,
        "pressure": 964.3,
        "sea_level": 1022.64,
        "grnd_level": 964.3,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.91,
        "deg": 172
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 03:00:00"
    },
    {
      "dt": 1462946400,
      "main": {
        "temp": 309.33,
        "temp_min": 309.33,
        "temp_max": 309.33,
        "pressure": 963.63,
        "sea_level": 1021.48,
        "grnd_level": 963.63,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.89,
        "deg": 192.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 06:00:00"
    },
    {
      "dt": 1462957200,
      "main": {
        "temp": 304.835,
        "temp_min": 304.835,
        "temp_max": 304.835,
        "pressure": 961.57,
        "sea_level": 1018.96,
        "grnd_level": 961.57,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.4,
        "deg": 221.505
      },
      "rain": {
        "3h": 2.74
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 09:00:00"
    },
    {
      "dt": 1462968000,
      "main": {
        "temp": 305.714,
        "temp_min": 305.714,
        "temp_max": 305.714,
        "pressure": 960.24,
        "sea_level": 1017.73,
        "grnd_level": 960.24,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.41,
        "deg": 234.504
      },
      "rain": {
        "3h": 1.87
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 12:00:00"
    },
    {
      "dt": 1462978800,
      "main": {
        "temp": 300.993,
        "temp_min": 300.993,
        "temp_max": 300.993,
        "pressure": 961.75,
        "sea_level": 1019.63,
        "grnd_level": 961.75,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.22,
        "deg": 194
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 15:00:00"
    },
    {
      "dt": 1462989600,
      "main": {
        "temp": 298.502,
        "temp_min": 298.502,
        "temp_max": 298.502,
        "pressure": 962.05,
        "sea_level": 1020.26,
        "grnd_level": 962.05,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.22,
        "deg": 218.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 18:00:00"
    },
    {
      "dt": 1463000400,
      "main": {
        "temp": 296.895,
        "temp_min": 296.895,
        "temp_max": 296.895,
        "pressure": 960.76,
        "sea_level": 1019.03,
        "grnd_level": 960.76,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.26,
        "deg": 147.005
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 21:00:00"
    },
    {
      "dt": 1463011200,
      "main": {
        "temp": 296.802,
        "temp_min": 296.802,
        "temp_max": 296.802,
        "pressure": 961.07,
        "sea_level": 1019.55,
        "grnd_level": 961.07,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.06,
        "deg": 213.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 00:00:00"
    },
    {
      "dt": 1463022000,
      "main": {
        "temp": 303.929,
        "temp_min": 303.929,
        "temp_max": 303.929,
        "pressure": 962.85,
        "sea_level": 1021.04,
        "grnd_level": 962.85,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 2.37,
        "deg": 270.5
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 03:00:00"
    },
    {
      "dt": 1463032800,
      "main": {
        "temp": 309.026,
        "temp_min": 309.026,
        "temp_max": 309.026,
        "pressure": 962.06,
        "sea_level": 1019.73,
        "grnd_level": 962.06,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.55,
        "deg": 226.501
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 06:00:00"
    },
    {
      "dt": 1463043600,
      "main": {
        "temp": 310.982,
        "temp_min": 310.982,
        "temp_max": 310.982,
        "pressure": 958.94,
        "sea_level": 1016.28,
        "grnd_level": 958.94,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.82,
        "deg": 282.004
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 09:00:00"
    },
    {
      "dt": 1463054400,
      "main": {
        "temp": 302.755,
        "temp_min": 302.755,
        "temp_max": 302.755,
        "pressure": 958.02,
        "sea_level": 1015.05,
        "grnd_level": 958.02,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.41,
        "deg": 349.002
      },
      "rain": {
        "3h": 2.075
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 12:00:00"
    },
    {
      "dt": 1463065200,
      "main": {
        "temp": 295.672,
        "temp_min": 295.672,
        "temp_max": 295.672,
        "pressure": 959.91,
        "sea_level": 1017.58,
        "grnd_level": 959.91,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.3,
        "deg": 206.501
      },
      "rain": {
        "3h": 3.84
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 15:00:00"
    },
    {
      "dt": 1463076000,
      "main": {
        "temp": 294.641,
        "temp_min": 294.641,
        "temp_max": 294.641,
        "pressure": 960.87,
        "sea_level": 1018.93,
        "grnd_level": 960.87,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.17,
        "deg": 208.002
      },
      "rain": {
        "3h": 1.99
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 18:00:00"
    },
    {
      "dt": 1463086800,
      "main": {
        "temp": 294.221,
        "temp_min": 294.221,
        "temp_max": 294.221,
        "pressure": 959.44,
        "sea_level": 1017.7,
        "grnd_level": 959.44,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.3,
        "deg": 197.501
      },
      "rain": {
        "3h": 0.6
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 21:00:00"
    },
    {
      "dt": 1463097600,
      "main": {
        "temp": 294.582,
        "temp_min": 294.582,
        "temp_max": 294.582,
        "pressure": 959.7,
        "sea_level": 1017.98,
        "grnd_level": 959.7,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.2,
        "deg": 173.5
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 00:00:00"
    },
    {
      "dt": 1463108400,
      "main": {
        "temp": 303.063,
        "temp_min": 303.063,
        "temp_max": 303.063,
        "pressure": 961.61,
        "sea_level": 1019.52,
        "grnd_level": 961.61,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.11,
        "deg": 194.503
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 03:00:00"
    },
    {
      "dt": 1463119200,
      "main": {
        "temp": 307.882,
        "temp_min": 307.882,
        "temp_max": 307.882,
        "pressure": 961.54,
        "sea_level": 1018.94,
        "grnd_level": 961.54,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.56,
        "deg": 205.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 06:00:00"
    },
    {
      "dt": 1463130000,
      "main": {
        "temp": 309.866,
        "temp_min": 309.866,
        "temp_max": 309.866,
        "pressure": 958.89,
        "sea_level": 1016.15,
        "grnd_level": 958.89,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.06,
        "deg": 168.004
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 09:00:00"
    },
    {
      "dt": 1463140800,
      "main": {
        "temp": 309.365,
        "temp_min": 309.365,
        "temp_max": 309.365,
        "pressure": 957.82,
        "sea_level": 1015.09,
        "grnd_level": 957.82,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 0.47,
        "deg": 191.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 12:00:00"
    },
    {
      "dt": 1463151600,
      "main": {
        "temp": 302.932,
        "temp_min": 302.932,
        "temp_max": 302.932,
        "pressure": 960.07,
        "sea_level": 1017.95,
        "grnd_level": 960.07,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 2.06,
        "deg": 134.502
      },
      "rain": {
        "3h": 0.21
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 15:00:00"
    },
    {
      "dt": 1463162400,
      "main": {
        "temp": 299.506,
        "temp_min": 299.506,
        "temp_max": 299.506,
        "pressure": 961.18,
        "sea_level": 1019.25,
        "grnd_level": 961.18,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.21,
        "deg": 146.503
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 18:00:00"
    },
    {
      "dt": 1463173200,
      "main": {
        "temp": 298.359,
        "temp_min": 298.359,
        "temp_max": 298.359,
        "pressure": 960.36,
        "sea_level": 1018.51,
        "grnd_level": 960.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 3.66,
        "deg": 156.503
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 21:00:00"
    }
  ]
},
  "data_delhi":{
  "city": {
    "id": 1273294,
    "name": "Delhi",
    "coord": {
      "lon": 77.216667,
      "lat": 28.666668
    },
    "country": "IN",
    "population": 0,
    "sys": {
      "population": 0
    }
  },
  "cod": "200",
  "message": 0.0111,
  "cnt": 37,
  "list": [
    {
      "dt": 1462870800,
      "main": {
        "temp": 310.44,
        "temp_min": 307.387,
        "temp_max": 310.44,
        "pressure": 995.84,
        "sea_level": 1020.15,
        "grnd_level": 995.84,
        "humidity": 56,
        "temp_kf": 3.05
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.85,
        "deg": 64
      },
      "rain": {
        "3h": 3.69
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-10 09:00:00"
    },
    {
      "dt": 1462881600,
      "main": {
        "temp": 310.67,
        "temp_min": 308.63,
        "temp_max": 310.67,
        "pressure": 994.09,
        "sea_level": 1018.3,
        "grnd_level": 994.09,
        "humidity": 44,
        "temp_kf": 2.04
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 1.61,
        "deg": 34.0014
      },
      "rain": {
        "3h": 0.58
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-10 12:00:00"
    },
    {
      "dt": 1462892400,
      "main": {
        "temp": 305.82,
        "temp_min": 304.803,
        "temp_max": 305.82,
        "pressure": 994.66,
        "sea_level": 1019.14,
        "grnd_level": 994.66,
        "humidity": 51,
        "temp_kf": 1.02
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.96,
        "deg": 30.5018
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 15:00:00"
    },
    {
      "dt": 1462903200,
      "main": {
        "temp": 302.453,
        "temp_min": 302.453,
        "temp_max": 302.453,
        "pressure": 995.8,
        "sea_level": 1020.27,
        "grnd_level": 995.8,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 2.97,
        "deg": 58.5055
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 18:00:00"
    },
    {
      "dt": 1462914000,
      "main": {
        "temp": 299.831,
        "temp_min": 299.831,
        "temp_max": 299.831,
        "pressure": 994.86,
        "sea_level": 1019.42,
        "grnd_level": 994.86,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.29,
        "deg": 47.5034
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-10 21:00:00"
    },
    {
      "dt": 1462924800,
      "main": {
        "temp": 298.499,
        "temp_min": 298.499,
        "temp_max": 298.499,
        "pressure": 994.8,
        "sea_level": 1019.44,
        "grnd_level": 994.8,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.27,
        "deg": 28.0015
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 00:00:00"
    },
    {
      "dt": 1462935600,
      "main": {
        "temp": 306.543,
        "temp_min": 306.543,
        "temp_max": 306.543,
        "pressure": 996.55,
        "sea_level": 1021.03,
        "grnd_level": 996.55,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.9,
        "deg": 63.5001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 03:00:00"
    },
    {
      "dt": 1462946400,
      "main": {
        "temp": 310.586,
        "temp_min": 310.586,
        "temp_max": 310.586,
        "pressure": 995.92,
        "sea_level": 1020.28,
        "grnd_level": 995.92,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.75,
        "deg": 138.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 06:00:00"
    },
    {
      "dt": 1462957200,
      "main": {
        "temp": 312.617,
        "temp_min": 312.617,
        "temp_max": 312.617,
        "pressure": 992.74,
        "sea_level": 1016.97,
        "grnd_level": 992.74,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.02,
        "deg": 264.006
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 09:00:00"
    },
    {
      "dt": 1462968000,
      "main": {
        "temp": 301.594,
        "temp_min": 301.594,
        "temp_max": 301.594,
        "pressure": 992.82,
        "sea_level": 1016.68,
        "grnd_level": 992.82,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 6.91,
        "deg": 347
      },
      "rain": {
        "3h": 2.7
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-11 12:00:00"
    },
    {
      "dt": 1462978800,
      "main": {
        "temp": 302.097,
        "temp_min": 302.097,
        "temp_max": 302.097,
        "pressure": 992.87,
        "sea_level": 1017.27,
        "grnd_level": 992.87,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 2.96,
        "deg": 11.0006
      },
      "rain": {
        "3h": 0.22
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 15:00:00"
    },
    {
      "dt": 1462989600,
      "main": {
        "temp": 299.434,
        "temp_min": 299.434,
        "temp_max": 299.434,
        "pressure": 992.79,
        "sea_level": 1017.34,
        "grnd_level": 992.79,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.2,
        "deg": 335.003
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 18:00:00"
    },
    {
      "dt": 1463000400,
      "main": {
        "temp": 297.873,
        "temp_min": 297.873,
        "temp_max": 297.873,
        "pressure": 991.66,
        "sea_level": 1016.23,
        "grnd_level": 991.66,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.21,
        "deg": 235
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-11 21:00:00"
    },
    {
      "dt": 1463011200,
      "main": {
        "temp": 296.96,
        "temp_min": 296.96,
        "temp_max": 296.96,
        "pressure": 991.86,
        "sea_level": 1016.39,
        "grnd_level": 991.86,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.21,
        "deg": 249.5
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 00:00:00"
    },
    {
      "dt": 1463022000,
      "main": {
        "temp": 305.971,
        "temp_min": 305.971,
        "temp_max": 305.971,
        "pressure": 992.8,
        "sea_level": 1017.17,
        "grnd_level": 992.8,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 236.501
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 03:00:00"
    },
    {
      "dt": 1463032800,
      "main": {
        "temp": 311.697,
        "temp_min": 311.697,
        "temp_max": 311.697,
        "pressure": 992.34,
        "sea_level": 1016.56,
        "grnd_level": 992.34,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.86,
        "deg": 293.505
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 06:00:00"
    },
    {
      "dt": 1463043600,
      "main": {
        "temp": 313.298,
        "temp_min": 313.298,
        "temp_max": 313.298,
        "pressure": 989.68,
        "sea_level": 1013.71,
        "grnd_level": 989.68,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 6.5,
        "deg": 313.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 09:00:00"
    },
    {
      "dt": 1463054400,
      "main": {
        "temp": 308.543,
        "temp_min": 308.543,
        "temp_max": 308.543,
        "pressure": 988.7,
        "sea_level": 1012.89,
        "grnd_level": 988.7,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 312
      },
      "rain": {
        "3h": 0.58
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 12:00:00"
    },
    {
      "dt": 1463065200,
      "main": {
        "temp": 300.461,
        "temp_min": 300.461,
        "temp_max": 300.461,
        "pressure": 990.22,
        "sea_level": 1014.32,
        "grnd_level": 990.22,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.69,
        "deg": 224.5
      },
      "rain": {
        "3h": 0.03
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 15:00:00"
    },
    {
      "dt": 1463076000,
      "main": {
        "temp": 299.019,
        "temp_min": 299.019,
        "temp_max": 299.019,
        "pressure": 991.19,
        "sea_level": 1015.71,
        "grnd_level": 991.19,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.02,
        "deg": 351.005
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 18:00:00"
    },
    {
      "dt": 1463086800,
      "main": {
        "temp": 297.19,
        "temp_min": 297.19,
        "temp_max": 297.19,
        "pressure": 990.9,
        "sea_level": 1015.35,
        "grnd_level": 990.9,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.26,
        "deg": 258.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 21:00:00"
    },
    {
      "dt": 1463097600,
      "main": {
        "temp": 296.178,
        "temp_min": 296.178,
        "temp_max": 296.178,
        "pressure": 991.04,
        "sea_level": 1015.74,
        "grnd_level": 991.04,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.26,
        "deg": 292.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 00:00:00"
    },
    {
      "dt": 1463108400,
      "main": {
        "temp": 305.962,
        "temp_min": 305.962,
        "temp_max": 305.962,
        "pressure": 993.07,
        "sea_level": 1017.41,
        "grnd_level": 993.07,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.06,
        "deg": 346.5
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 03:00:00"
    },
    {
      "dt": 1463119200,
      "main": {
        "temp": 311.929,
        "temp_min": 311.929,
        "temp_max": 311.929,
        "pressure": 992.64,
        "sea_level": 1016.84,
        "grnd_level": 992.64,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.06,
        "deg": 52.0001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 06:00:00"
    },
    {
      "dt": 1463130000,
      "main": {
        "temp": 314.259,
        "temp_min": 314.259,
        "temp_max": 314.259,
        "pressure": 990.11,
        "sea_level": 1014.23,
        "grnd_level": 990.11,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.96,
        "deg": 317.008
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 09:00:00"
    },
    {
      "dt": 1463140800,
      "main": {
        "temp": 309.81,
        "temp_min": 309.81,
        "temp_max": 309.81,
        "pressure": 989.28,
        "sea_level": 1013.28,
        "grnd_level": 989.28,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 3.26,
        "deg": 315.001
      },
      "rain": {
        "3h": 0.25
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 12:00:00"
    },
    {
      "dt": 1463151600,
      "main": {
        "temp": 298.754,
        "temp_min": 298.754,
        "temp_max": 298.754,
        "pressure": 991.36,
        "sea_level": 1015.47,
        "grnd_level": 991.36,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.56,
        "deg": 47.5007
      },
      "rain": {
        "3h": 0.59
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 15:00:00"
    },
    {
      "dt": 1463162400,
      "main": {
        "temp": 296.743,
        "temp_min": 296.743,
        "temp_max": 296.743,
        "pressure": 992.38,
        "sea_level": 1016.66,
        "grnd_level": 992.38,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.12,
        "deg": 275
      },
      "rain": {
        "3h": 0.11
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 18:00:00"
    },
    {
      "dt": 1463173200,
      "main": {
        "temp": 297.744,
        "temp_min": 297.744,
        "temp_max": 297.744,
        "pressure": 991.57,
        "sea_level": 1016.05,
        "grnd_level": 991.57,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 1.32,
        "deg": 264.004
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 21:00:00"
    },
    {
      "dt": 1463184000,
      "main": {
        "temp": 297.216,
        "temp_min": 297.216,
        "temp_max": 297.216,
        "pressure": 992.17,
        "sea_level": 1016.67,
        "grnd_level": 992.17,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.26,
        "deg": 326.501
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 00:00:00"
    },
    {
      "dt": 1463194800,
      "main": {
        "temp": 305.575,
        "temp_min": 305.575,
        "temp_max": 305.575,
        "pressure": 993.79,
        "sea_level": 1018.1,
        "grnd_level": 993.79,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 1.96,
        "deg": 68.5015
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 03:00:00"
    },
    {
      "dt": 1463205600,
      "main": {
        "temp": 312.433,
        "temp_min": 312.433,
        "temp_max": 312.433,
        "pressure": 994,
        "sea_level": 1018.2,
        "grnd_level": 994,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.27,
        "deg": 116.505
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 06:00:00"
    },
    {
      "dt": 1463216400,
      "main": {
        "temp": 314.196,
        "temp_min": 314.196,
        "temp_max": 314.196,
        "pressure": 992.03,
        "sea_level": 1016.12,
        "grnd_level": 992.03,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 2.07,
        "deg": 306.501
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 09:00:00"
    },
    {
      "dt": 1463227200,
      "main": {
        "temp": 313.244,
        "temp_min": 313.244,
        "temp_max": 313.244,
        "pressure": 990.64,
        "sea_level": 1014.68,
        "grnd_level": 990.64,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 4.21,
        "deg": 312.511
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 12:00:00"
    },
    {
      "dt": 1463238000,
      "main": {
        "temp": 307.206,
        "temp_min": 307.206,
        "temp_max": 307.206,
        "pressure": 991.64,
        "sea_level": 1015.9,
        "grnd_level": 991.64,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.42,
        "deg": 317.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 15:00:00"
    },
    {
      "dt": 1463248800,
      "main": {
        "temp": 303.93,
        "temp_min": 303.93,
        "temp_max": 303.93,
        "pressure": 992.41,
        "sea_level": 1016.75,
        "grnd_level": 992.41,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.51,
        "deg": 313.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 18:00:00"
    },
    {
      "dt": 1463259600,
      "main": {
        "temp": 301.672,
        "temp_min": 301.672,
        "temp_max": 301.672,
        "pressure": 991.82,
        "sea_level": 1016.19,
        "grnd_level": 991.82,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.92,
        "deg": 342.507
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 21:00:00"
    }
  ]
},
  "data_bengaluru":{
  "city": {
    "id": 6695236,
    "name": "Kanija Bhavan",
    "coord": {
      "lon": 77.584702,
      "lat": 12.98359
    },
    "country": "IN",
    "population": 0,
    "sys": {
      "population": 0
    }
  },
  "cod": "200",
  "message": 0.0086,
  "cnt": 38,
  "list": [
    {
      "dt": 1463032800,
      "main": {
        "temp": 308.93,
        "temp_min": 304.592,
        "temp_max": 308.93,
        "pressure": 925.69,
        "sea_level": 1020.93,
        "grnd_level": 925.69,
        "humidity": 53,
        "temp_kf": 4.34
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 3.31,
        "deg": 321.004
      },
      "rain": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 06:00:00"
    },
    {
      "dt": 1463043600,
      "main": {
        "temp": 307.72,
        "temp_min": 304.469,
        "temp_max": 307.72,
        "pressure": 923.16,
        "sea_level": 1018.04,
        "grnd_level": 923.16,
        "humidity": 64,
        "temp_kf": 3.25
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.96,
        "deg": 347.502
      },
      "rain": {
        "3h": 1.04
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 09:00:00"
    },
    {
      "dt": 1463054400,
      "main": {
        "temp": 300.43,
        "temp_min": 298.26,
        "temp_max": 300.43,
        "pressure": 923.47,
        "sea_level": 1018.25,
        "grnd_level": 923.47,
        "humidity": 85,
        "temp_kf": 2.17
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 3.21,
        "deg": 115.502
      },
      "rain": {
        "3h": 3.24
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 12:00:00"
    },
    {
      "dt": 1463065200,
      "main": {
        "temp": 296.01,
        "temp_min": 294.928,
        "temp_max": 296.01,
        "pressure": 925.16,
        "sea_level": 1020.65,
        "grnd_level": 925.16,
        "humidity": 92,
        "temp_kf": 1.08
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.61,
        "deg": 194
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 15:00:00"
    },
    {
      "dt": 1463076000,
      "main": {
        "temp": 293.922,
        "temp_min": 293.922,
        "temp_max": 293.922,
        "pressure": 925.25,
        "sea_level": 1021.09,
        "grnd_level": 925.25,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 76
      },
      "wind": {
        "speed": 1.41,
        "deg": 205.512
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 18:00:00"
    },
    {
      "dt": 1463086800,
      "main": {
        "temp": 293.532,
        "temp_min": 293.532,
        "temp_max": 293.532,
        "pressure": 923.66,
        "sea_level": 1019.51,
        "grnd_level": 923.66,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 1.26,
        "deg": 255.009
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 21:00:00"
    },
    {
      "dt": 1463097600,
      "main": {
        "temp": 293.309,
        "temp_min": 293.309,
        "temp_max": 293.309,
        "pressure": 924,
        "sea_level": 1019.97,
        "grnd_level": 924,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 1.31,
        "deg": 197.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 00:00:00"
    },
    {
      "dt": 1463108400,
      "main": {
        "temp": 298.402,
        "temp_min": 298.402,
        "temp_max": 298.402,
        "pressure": 925.95,
        "sea_level": 1021.61,
        "grnd_level": 925.95,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.97,
        "deg": 221.003
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 03:00:00"
    },
    {
      "dt": 1463119200,
      "main": {
        "temp": 305.297,
        "temp_min": 305.297,
        "temp_max": 305.297,
        "pressure": 925.49,
        "sea_level": 1020.34,
        "grnd_level": 925.49,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.31,
        "deg": 298.5
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 06:00:00"
    },
    {
      "dt": 1463130000,
      "main": {
        "temp": 301.309,
        "temp_min": 301.309,
        "temp_max": 301.309,
        "pressure": 923.15,
        "sea_level": 1017.66,
        "grnd_level": 923.15,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 2.7,
        "deg": 0.0015564
      },
      "rain": {
        "3h": 2.185
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 09:00:00"
    },
    {
      "dt": 1463140800,
      "main": {
        "temp": 302.634,
        "temp_min": 302.634,
        "temp_max": 302.634,
        "pressure": 922.89,
        "sea_level": 1017.94,
        "grnd_level": 922.89,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 1.53,
        "deg": 35.5049
      },
      "rain": {
        "3h": 1
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 12:00:00"
    },
    {
      "dt": 1463151600,
      "main": {
        "temp": 297.049,
        "temp_min": 297.049,
        "temp_max": 297.049,
        "pressure": 925.63,
        "sea_level": 1021.44,
        "grnd_level": 925.63,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.21,
        "deg": 185.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 15:00:00"
    },
    {
      "dt": 1463162400,
      "main": {
        "temp": 294.241,
        "temp_min": 294.241,
        "temp_max": 294.241,
        "pressure": 927.01,
        "sea_level": 1023.29,
        "grnd_level": 927.01,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 3.21,
        "deg": 248.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 18:00:00"
    },
    {
      "dt": 1463173200,
      "main": {
        "temp": 292.812,
        "temp_min": 292.812,
        "temp_max": 292.812,
        "pressure": 925.49,
        "sea_level": 1021.72,
        "grnd_level": 925.49,
        "humidity": 98,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.48,
        "deg": 266.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 21:00:00"
    },
    {
      "dt": 1463184000,
      "main": {
        "temp": 291.646,
        "temp_min": 291.646,
        "temp_max": 291.646,
        "pressure": 925.51,
        "sea_level": 1021.83,
        "grnd_level": 925.51,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.29,
        "deg": 217.501
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 00:00:00"
    },
    {
      "dt": 1463194800,
      "main": {
        "temp": 299.465,
        "temp_min": 299.465,
        "temp_max": 299.465,
        "pressure": 927.12,
        "sea_level": 1022.95,
        "grnd_level": 927.12,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.01,
        "deg": 251.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 03:00:00"
    },
    {
      "dt": 1463205600,
      "main": {
        "temp": 305.889,
        "temp_min": 305.889,
        "temp_max": 305.889,
        "pressure": 926.47,
        "sea_level": 1021.5,
        "grnd_level": 926.47,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.17,
        "deg": 299.509
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 06:00:00"
    },
    {
      "dt": 1463216400,
      "main": {
        "temp": 302.001,
        "temp_min": 302.001,
        "temp_max": 302.001,
        "pressure": 924.14,
        "sea_level": 1018.45,
        "grnd_level": 924.14,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.56,
        "deg": 359.5
      },
      "rain": {
        "3h": 3.235
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 09:00:00"
    },
    {
      "dt": 1463227200,
      "main": {
        "temp": 304.268,
        "temp_min": 304.268,
        "temp_max": 304.268,
        "pressure": 923.5,
        "sea_level": 1018.21,
        "grnd_level": 923.5,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.77,
        "deg": 122
      },
      "rain": {
        "3h": 0.455
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 12:00:00"
    },
    {
      "dt": 1463238000,
      "main": {
        "temp": 299.765,
        "temp_min": 299.765,
        "temp_max": 299.765,
        "pressure": 925.29,
        "sea_level": 1021.15,
        "grnd_level": 925.29,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 1.36,
        "deg": 110
      },
      "rain": {
        "3h": 0.04
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 15:00:00"
    },
    {
      "dt": 1463248800,
      "main": {
        "temp": 296.582,
        "temp_min": 296.582,
        "temp_max": 296.582,
        "pressure": 926.55,
        "sea_level": 1022.61,
        "grnd_level": 926.55,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.06,
        "deg": 253.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 18:00:00"
    },
    {
      "dt": 1463259600,
      "main": {
        "temp": 294.096,
        "temp_min": 294.096,
        "temp_max": 294.096,
        "pressure": 925.14,
        "sea_level": 1021.39,
        "grnd_level": 925.14,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.22,
        "deg": 178.005
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 21:00:00"
    },
    {
      "dt": 1463270400,
      "main": {
        "temp": 292.64,
        "temp_min": 292.64,
        "temp_max": 292.64,
        "pressure": 924.97,
        "sea_level": 1021.3,
        "grnd_level": 924.97,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.23,
        "deg": 237.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 00:00:00"
    },
    {
      "dt": 1463281200,
      "main": {
        "temp": 300.172,
        "temp_min": 300.172,
        "temp_max": 300.172,
        "pressure": 926.55,
        "sea_level": 1022.31,
        "grnd_level": 926.55,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.95,
        "deg": 196.001
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 03:00:00"
    },
    {
      "dt": 1463292000,
      "main": {
        "temp": 305.962,
        "temp_min": 305.962,
        "temp_max": 305.962,
        "pressure": 925.74,
        "sea_level": 1020.72,
        "grnd_level": 925.74,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.01,
        "deg": 313.5
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 06:00:00"
    },
    {
      "dt": 1463302800,
      "main": {
        "temp": 302.195,
        "temp_min": 302.195,
        "temp_max": 302.195,
        "pressure": 923.26,
        "sea_level": 1017.62,
        "grnd_level": 923.26,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 3.2,
        "deg": 45.0005
      },
      "rain": {
        "3h": 4.71
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 09:00:00"
    },
    {
      "dt": 1463313600,
      "main": {
        "temp": 298.561,
        "temp_min": 298.561,
        "temp_max": 298.561,
        "pressure": 922.65,
        "sea_level": 1017.21,
        "grnd_level": 922.65,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 0.65,
        "deg": 103
      },
      "rain": {
        "3h": 3.32
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 12:00:00"
    },
    {
      "dt": 1463324400,
      "main": {
        "temp": 294.743,
        "temp_min": 294.743,
        "temp_max": 294.743,
        "pressure": 925.32,
        "sea_level": 1020.72,
        "grnd_level": 925.32,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 2.86,
        "deg": 203.5
      },
      "rain": {
        "3h": 1.8
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 15:00:00"
    },
    {
      "dt": 1463335200,
      "main": {
        "temp": 293.276,
        "temp_min": 293.276,
        "temp_max": 293.276,
        "pressure": 925.61,
        "sea_level": 1021.58,
        "grnd_level": 925.61,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.48,
        "deg": 235.001
      },
      "rain": {
        "3h": 1.67
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 18:00:00"
    },
    {
      "dt": 1463346000,
      "main": {
        "temp": 292.218,
        "temp_min": 292.218,
        "temp_max": 292.218,
        "pressure": 923.86,
        "sea_level": 1019.81,
        "grnd_level": 923.86,
        "humidity": 99,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.26,
        "deg": 179.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 21:00:00"
    },
    {
      "dt": 1463356800,
      "main": {
        "temp": 291.863,
        "temp_min": 291.863,
        "temp_max": 291.863,
        "pressure": 923.58,
        "sea_level": 1019.6,
        "grnd_level": 923.58,
        "humidity": 98,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.32,
        "deg": 243.012
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 00:00:00"
    },
    {
      "dt": 1463367600,
      "main": {
        "temp": 298.541,
        "temp_min": 298.541,
        "temp_max": 298.541,
        "pressure": 924.68,
        "sea_level": 1020.31,
        "grnd_level": 924.68,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 315.504
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 03:00:00"
    },
    {
      "dt": 1463378400,
      "main": {
        "temp": 305.179,
        "temp_min": 305.179,
        "temp_max": 305.179,
        "pressure": 923.8,
        "sea_level": 1018.58,
        "grnd_level": 923.8,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 2.86,
        "deg": 28.5019
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 06:00:00"
    },
    {
      "dt": 1463389200,
      "main": {
        "temp": 306.458,
        "temp_min": 306.458,
        "temp_max": 306.458,
        "pressure": 920.94,
        "sea_level": 1015.33,
        "grnd_level": 920.94,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 5.2,
        "deg": 44.5005
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 09:00:00"
    },
    {
      "dt": 1463400000,
      "main": {
        "temp": 304.636,
        "temp_min": 304.636,
        "temp_max": 304.636,
        "pressure": 920.17,
        "sea_level": 1014.58,
        "grnd_level": 920.17,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 64
      },
      "wind": {
        "speed": 4.61,
        "deg": 43.013
      },
      "rain": {
        
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 12:00:00"
    },
    {
      "dt": 1463410800,
      "main": {
        "temp": 300.714,
        "temp_min": 300.714,
        "temp_max": 300.714,
        "pressure": 922.17,
        "sea_level": 1017.2,
        "grnd_level": 922.17,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.51,
        "deg": 44.0026
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 15:00:00"
    },
    {
      "dt": 1463421600,
      "main": {
        "temp": 299.019,
        "temp_min": 299.019,
        "temp_max": 299.019,
        "pressure": 922.76,
        "sea_level": 1018.51,
        "grnd_level": 922.76,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.66,
        "deg": 57.5043
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 18:00:00"
    },
    {
      "dt": 1463432400,
      "main": {
        "temp": 296.022,
        "temp_min": 296.022,
        "temp_max": 296.022,
        "pressure": 921.26,
        "sea_level": 1016.88,
        "grnd_level": 921.26,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.78,
        "deg": 336.002
      },
      "rain": {
        
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 21:00:00"
    }
  ]
},
  "data_mumbai":{
  "city": {
    "id": 1275339,
    "name": "Mumbai",
    "coord": {
      "lon": 72.847939,
      "lat": 19.01441
    },
    "country": "IN",
    "population": 0,
    "sys": {
      "population": 0
    }
  },
  "cod": "200",
  "message": 0.0102,
  "cnt": 38,
  "list": [
    {
      "dt": 1463032800,
      "main": {
        "temp": 304.16,
        "temp_min": 303.392,
        "temp_max": 304.16,
        "pressure": 1021.42,
        "sea_level": 1022.02,
        "grnd_level": 1021.42,
        "humidity": 88,
        "temp_kf": 0.77
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.21,
        "deg": 310.004
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 06:00:00"
    },
    {
      "dt": 1463043600,
      "main": {
        "temp": 304.1,
        "temp_min": 303.519,
        "temp_max": 304.1,
        "pressure": 1019.38,
        "sea_level": 1019.99,
        "grnd_level": 1019.38,
        "humidity": 84,
        "temp_kf": 0.58
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.76,
        "deg": 306.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 09:00:00"
    },
    {
      "dt": 1463054400,
      "main": {
        "temp": 303.65,
        "temp_min": 303.26,
        "temp_max": 303.65,
        "pressure": 1017.98,
        "sea_level": 1018.61,
        "grnd_level": 1017.98,
        "humidity": 82,
        "temp_kf": 0.39
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.76,
        "deg": 303.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-12 12:00:00"
    },
    {
      "dt": 1463065200,
      "main": {
        "temp": 302.57,
        "temp_min": 302.378,
        "temp_max": 302.57,
        "pressure": 1019.43,
        "sea_level": 1020.12,
        "grnd_level": 1019.43,
        "humidity": 91,
        "temp_kf": 0.19
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 295.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 15:00:00"
    },
    {
      "dt": 1463076000,
      "main": {
        "temp": 301.822,
        "temp_min": 301.822,
        "temp_max": 301.822,
        "pressure": 1020.25,
        "sea_level": 1021.01,
        "grnd_level": 1020.25,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.51,
        "deg": 285.012
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 18:00:00"
    },
    {
      "dt": 1463086800,
      "main": {
        "temp": 301.382,
        "temp_min": 301.382,
        "temp_max": 301.382,
        "pressure": 1018.74,
        "sea_level": 1019.51,
        "grnd_level": 1018.74,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.21,
        "deg": 298.509
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-12 21:00:00"
    },
    {
      "dt": 1463097600,
      "main": {
        "temp": 301.009,
        "temp_min": 301.009,
        "temp_max": 301.009,
        "pressure": 1018.84,
        "sea_level": 1019.64,
        "grnd_level": 1018.84,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.71,
        "deg": 327.002
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 00:00:00"
    },
    {
      "dt": 1463108400,
      "main": {
        "temp": 302.152,
        "temp_min": 302.152,
        "temp_max": 302.152,
        "pressure": 1020.79,
        "sea_level": 1021.57,
        "grnd_level": 1020.79,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.87,
        "deg": 331.503
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 03:00:00"
    },
    {
      "dt": 1463119200,
      "main": {
        "temp": 303.247,
        "temp_min": 303.247,
        "temp_max": 303.247,
        "pressure": 1021.13,
        "sea_level": 1021.68,
        "grnd_level": 1021.13,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 3.71,
        "deg": 308
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 06:00:00"
    },
    {
      "dt": 1463130000,
      "main": {
        "temp": 303.409,
        "temp_min": 303.409,
        "temp_max": 303.409,
        "pressure": 1019.29,
        "sea_level": 1019.85,
        "grnd_level": 1019.29,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.85,
        "deg": 299.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 09:00:00"
    },
    {
      "dt": 1463140800,
      "main": {
        "temp": 303.284,
        "temp_min": 303.284,
        "temp_max": 303.284,
        "pressure": 1017.82,
        "sea_level": 1018.51,
        "grnd_level": 1017.82,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.38,
        "deg": 301.505
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-13 12:00:00"
    },
    {
      "dt": 1463151600,
      "main": {
        "temp": 302.399,
        "temp_min": 302.399,
        "temp_max": 302.399,
        "pressure": 1019.58,
        "sea_level": 1020.3,
        "grnd_level": 1019.58,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.66,
        "deg": 299.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 15:00:00"
    },
    {
      "dt": 1463162400,
      "main": {
        "temp": 301.741,
        "temp_min": 301.741,
        "temp_max": 301.741,
        "pressure": 1020.96,
        "sea_level": 1021.67,
        "grnd_level": 1020.96,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.81,
        "deg": 293.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 18:00:00"
    },
    {
      "dt": 1463173200,
      "main": {
        "temp": 301.212,
        "temp_min": 301.212,
        "temp_max": 301.212,
        "pressure": 1020.01,
        "sea_level": 1020.67,
        "grnd_level": 1020.01,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.26,
        "deg": 308.002
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-13 21:00:00"
    },
    {
      "dt": 1463184000,
      "main": {
        "temp": 300.896,
        "temp_min": 300.896,
        "temp_max": 300.896,
        "pressure": 1020.35,
        "sea_level": 1021.14,
        "grnd_level": 1020.35,
        "humidity": 98,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.96,
        "deg": 317.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 00:00:00"
    },
    {
      "dt": 1463194800,
      "main": {
        "temp": 302.115,
        "temp_min": 302.115,
        "temp_max": 302.115,
        "pressure": 1022.37,
        "sea_level": 1023.15,
        "grnd_level": 1022.37,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 1.59,
        "deg": 300.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 03:00:00"
    },
    {
      "dt": 1463205600,
      "main": {
        "temp": 303.239,
        "temp_min": 303.239,
        "temp_max": 303.239,
        "pressure": 1022.44,
        "sea_level": 1023.12,
        "grnd_level": 1022.44,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.87,
        "deg": 305.509
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 06:00:00"
    },
    {
      "dt": 1463216400,
      "main": {
        "temp": 303.601,
        "temp_min": 303.601,
        "temp_max": 303.601,
        "pressure": 1020.36,
        "sea_level": 1020.88,
        "grnd_level": 1020.36,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.71,
        "deg": 303.5
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 09:00:00"
    },
    {
      "dt": 1463227200,
      "main": {
        "temp": 303.668,
        "temp_min": 303.668,
        "temp_max": 303.668,
        "pressure": 1018.5,
        "sea_level": 1019.19,
        "grnd_level": 1018.5,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.12,
        "deg": 305
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-14 12:00:00"
    },
    {
      "dt": 1463238000,
      "main": {
        "temp": 302.765,
        "temp_min": 302.765,
        "temp_max": 302.765,
        "pressure": 1019.81,
        "sea_level": 1020.55,
        "grnd_level": 1019.81,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.66,
        "deg": 302.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 15:00:00"
    },
    {
      "dt": 1463248800,
      "main": {
        "temp": 302.132,
        "temp_min": 302.132,
        "temp_max": 302.132,
        "pressure": 1020.66,
        "sea_level": 1021.48,
        "grnd_level": 1020.66,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 4.38,
        "deg": 303.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 18:00:00"
    },
    {
      "dt": 1463259600,
      "main": {
        "temp": 301.796,
        "temp_min": 301.796,
        "temp_max": 301.796,
        "pressure": 1019.33,
        "sea_level": 1020.05,
        "grnd_level": 1019.33,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 4.15,
        "deg": 322.005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-14 21:00:00"
    },
    {
      "dt": 1463270400,
      "main": {
        "temp": 301.44,
        "temp_min": 301.44,
        "temp_max": 301.44,
        "pressure": 1019.33,
        "sea_level": 1020.12,
        "grnd_level": 1019.33,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 354.002
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 00:00:00"
    },
    {
      "dt": 1463281200,
      "main": {
        "temp": 302.422,
        "temp_min": 302.422,
        "temp_max": 302.422,
        "pressure": 1020.98,
        "sea_level": 1021.66,
        "grnd_level": 1020.98,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.4,
        "deg": 4.50073
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 03:00:00"
    },
    {
      "dt": 1463292000,
      "main": {
        "temp": 303.812,
        "temp_min": 303.812,
        "temp_max": 303.812,
        "pressure": 1020.82,
        "sea_level": 1021.45,
        "grnd_level": 1020.82,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.06,
        "deg": 319.5
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 06:00:00"
    },
    {
      "dt": 1463302800,
      "main": {
        "temp": 304.695,
        "temp_min": 304.695,
        "temp_max": 304.695,
        "pressure": 1018.09,
        "sea_level": 1018.71,
        "grnd_level": 1018.09,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 7.15,
        "deg": 321.501
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 09:00:00"
    },
    {
      "dt": 1463313600,
      "main": {
        "temp": 304.961,
        "temp_min": 304.961,
        "temp_max": 304.961,
        "pressure": 1016.11,
        "sea_level": 1016.77,
        "grnd_level": 1016.11,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 7.75,
        "deg": 321
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-15 12:00:00"
    },
    {
      "dt": 1463324400,
      "main": {
        "temp": 303.593,
        "temp_min": 303.593,
        "temp_max": 303.593,
        "pressure": 1017.81,
        "sea_level": 1018.49,
        "grnd_level": 1017.81,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 6.81,
        "deg": 309.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 15:00:00"
    },
    {
      "dt": 1463335200,
      "main": {
        "temp": 302.526,
        "temp_min": 302.526,
        "temp_max": 302.526,
        "pressure": 1019.23,
        "sea_level": 1019.92,
        "grnd_level": 1019.23,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.33,
        "deg": 305.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 18:00:00"
    },
    {
      "dt": 1463346000,
      "main": {
        "temp": 302.118,
        "temp_min": 302.118,
        "temp_max": 302.118,
        "pressure": 1018.21,
        "sea_level": 1018.87,
        "grnd_level": 1018.21,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.38,
        "deg": 310.002
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-15 21:00:00"
    },
    {
      "dt": 1463356800,
      "main": {
        "temp": 301.963,
        "temp_min": 301.963,
        "temp_max": 301.963,
        "pressure": 1017.77,
        "sea_level": 1018.55,
        "grnd_level": 1017.77,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.12,
        "deg": 335.512
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 00:00:00"
    },
    {
      "dt": 1463367600,
      "main": {
        "temp": 303.191,
        "temp_min": 303.191,
        "temp_max": 303.191,
        "pressure": 1018.79,
        "sea_level": 1019.5,
        "grnd_level": 1018.79,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.11,
        "deg": 353.504
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 03:00:00"
    },
    {
      "dt": 1463378400,
      "main": {
        "temp": 304.629,
        "temp_min": 304.629,
        "temp_max": 304.629,
        "pressure": 1018.32,
        "sea_level": 1018.94,
        "grnd_level": 1018.32,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.36,
        "deg": 317.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 06:00:00"
    },
    {
      "dt": 1463389200,
      "main": {
        "temp": 305.008,
        "temp_min": 305.008,
        "temp_max": 305.008,
        "pressure": 1016.19,
        "sea_level": 1016.75,
        "grnd_level": 1016.19,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.65,
        "deg": 302.5
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 09:00:00"
    },
    {
      "dt": 1463400000,
      "main": {
        "temp": 304.486,
        "temp_min": 304.486,
        "temp_max": 304.486,
        "pressure": 1014.92,
        "sea_level": 1015.59,
        "grnd_level": 1014.92,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.23,
        "deg": 294.013
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2016-05-16 12:00:00"
    },
    {
      "dt": 1463410800,
      "main": {
        "temp": 302.914,
        "temp_min": 302.914,
        "temp_max": 302.914,
        "pressure": 1017.01,
        "sea_level": 1017.73,
        "grnd_level": 1017.01,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.86,
        "deg": 295.003
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 15:00:00"
    },
    {
      "dt": 1463421600,
      "main": {
        "temp": 302.569,
        "temp_min": 302.569,
        "temp_max": 302.569,
        "pressure": 1018.17,
        "sea_level": 1018.83,
        "grnd_level": 1018.17,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.66,
        "deg": 305.504
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 18:00:00"
    },
    {
      "dt": 1463432400,
      "main": {
        "temp": 302.172,
        "temp_min": 302.172,
        "temp_max": 302.172,
        "pressure": 1016.75,
        "sea_level": 1017.44,
        "grnd_level": 1016.75,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.7,
        "deg": 326.002
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2016-05-16 21:00:00"
    }
  ]
}
};
  weatherData={
  "result1":records["data_hyd"],
  "result2":records["data_delhi"]
};
 // kony.print("weather data:-"+JSON.stringify(weatherData["result1"]["list"][0]["dt_txt"]));
}

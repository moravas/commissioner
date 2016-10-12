var schema = {
    "Network": {
        "IPAddress": "ipv4",
        "NetworkMask": "ipv4",
        "DefaultGateway": "ipv4",
        "meta": {
            "enumerate": 1
        }
    },
    "Sysconfig": {
        "HwInputNumber": "int<2>",
        "HwOutputNumber": "int<2>",
        "CIK": "string<40>",
        "meta": {
            "enumerate": 1
        }
    },
    "Input": {
        "Trigger": "enum<BothEdges,RisingEdge,DeferredBothEdges,DeferredRisingEdge>",
        "Name": "string<16>",
        "meta": {
            "enumerate": 800
        }
    },
    "Output": {
        "Address": "int<2>",
        "TimeoutOFF": "int<2>",
        "TimeoutON": "int<2>",
        "Name": "string<16>",
        "Inputs": "array[int<2>]",
        "meta": {
            "enumerate": 200
        }
    },
    "Tristateoutput": {
        "Addresslow": "int<2>",
        "Addresshigh": "int<2>",
        "TimeoutOFF": "int<2>",
        "TimeoutON": "int<2>",
        "Name": "string<16>",
        "InputsUpDown": "array[int<2>]",
        "InputsDown": "array[int<2>]",
        "InputsUp": "array[int<2>]",
        "meta": {
            "enumerate": 1
        }
    },
    "Irrigation": {
        "Area": "int<2>",
        "Input": "int<2>",
        "UpTime": "int<2>",
        "StartTime": "int<2>",
        "Mode": "enum<Normal,Grown>",
        "OffsetTime": "int<2>",
        "DailyPrecipitation": "int<2>",
        "UnitPrecipitation": "int<2>",
        "RepeatCount": "int<2>",
        "Name": "string<16>",
        "meta": {
            "enumerate": 1
        }
    }
}

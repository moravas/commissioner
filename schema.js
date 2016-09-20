var schema = {
    "standalone": {
        "network": {
            "IPAddress": "ipv4",
            "NetworkMask": "ipv4",
            "DefaultGateway": "ipv4"
        },
        "sysconfig": {
            "hwInputNumber": "int<2>",
            "hwOutputNumber": "int<2>",
            "cik": "string<40>"
        }
    },
    "enumeration": {
        "input": {
            "trigger": "enum<BothEdges,RisingEdge,DeferredBothEdges,DeferredRisingEdge>",
            "name": "string<16>"
        },
        "output": {
            "address": "int<2>",
            "timeoutOFF": "int<2>",
            "timeoutON": "int<2>",
            "name": "string<16>",
            "inputs": "array[int<2>]"
        },
        "tristateoutput": {
            "addresslow": "int<2>",
            "addresshigh": "int<2>",
            "timeoutOFF": "int<2>",
            "timeoutON": "int<2>",
            "name": "string<16>",
            "inputsUpDown": "array[int<2>]",
            "inputsDown": "array[int<2>]",
            "inputsUp": "array[int<2>]"
        },
        "irrigation": {
            "area": "int<2>",
            "input": "int<2>",
            "upTime": "int<2>",
            "startTime": "int<2>",
            "mode": "enum<Normal,Grown>",
            "offsetTime": "int<2>",
            "dailyPrecipitation": "int<2>",
            "unitPrecipitation": "int<2>",
            "repeatCount": "int<2>",
            "name": "string<16>"
        }
    }
}

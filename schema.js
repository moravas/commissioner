var schema = {
    "standalone": [
        {
            "-name": "network",
            "ipproperty": [
                { "-name": "IPAddress" },
                { "-name": "networkMask" },
                { "-name": "defaultGateway" }
            ]
        },
        {
            "-name": "sysconfig",
            "integralproperty": [
                {
                    "-name": "hwInputNumber",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "hwOutputNumber",
                    "-queryas": "unsigned short",
                    "-size": "2"
                }
            ],
            "stringproperty": {
                "-name": "cik",
                "-size": "40"
            }
        }
    ],
    "enumeration": [
        {
            "-name": "input",
            "integralproperty": {
                "-name": "trigger",
                "-queryas": "unsigned char",
                "-size": "1",
                "-values": "BothEdges,RisingEdge,DeferredBothEdges,DeferredRisingEdge"
            },
            "stringproperty": {
                "-name": "name",
                "-size": "16"
            }
        },
        {
            "-name": "output",
            "integralproperty": [
                {
                    "-name": "address",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "timeoutOFF",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "timeoutON",
                    "-queryas": "unsigned short",
                    "-size": "2"
                }
            ],
            "stringproperty": {
                "-name": "name",
                "-size": "16"
            },
            "variadicproperty": {
                "-name": "inputs",
                "-queryas": "std::vector<unsigned short>",
                "-storagetype": "unsigned short",
                "-splitup": ";"
            }
        },
        {
            "-name": "tristateoutput",
            "integralproperty": [
                {
                    "-name": "addresslow",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "addresshigh",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "timeoutOFF",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "timeoutON",
                    "-queryas": "unsigned short",
                    "-size": "2"
                }
            ],
            "stringproperty": {
                "-name": "name",
                "-size": "16"
            },
            "variadicproperty": [
                {
                    "-name": "inputsUpDown",
                    "-queryas": "std::vector<unsigned short>",
                    "-storagetype": "unsigned short",
                    "-splitup": ";"
                },
                {
                    "-name": "inputsDown",
                    "-queryas": "std::vector<unsigned short>",
                    "-storagetype": "unsigned short",
                    "-splitup": ";"
                },
                {
                    "-name": "inputsUp",
                    "-queryas": "std::vector<unsigned short>",
                    "-storagetype": "unsigned short",
                    "-splitup": ";"
                }
            ]
        },
        {
            "-name": "irrigation",
            "integralproperty": [
                {
                    "-name": "area",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "input",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "upTime",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "startTime",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "mode",
                    "-queryas": "unsigned char",
                    "-size": "1",
                    "-values": "Normal,Grown"
                },
                {
                    "-name": "offsetTime",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "dailyPrecipitation",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "unitPrecipitation",
                    "-queryas": "unsigned short",
                    "-size": "2"
                },
                {
                    "-name": "repeatCount",
                    "-queryas": "unsigned short",
                    "-size": "2"
                }
            ],
            "stringproperty": {
                "-name": "name",
                "-size": "16"
            }
        }
    ]
}

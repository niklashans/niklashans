<script>
        // global styling
            Chart.defaults.backgroundColor = 'rgba(0, 0, 0, 0.0)';
            Chart.defaults.defaultFontColor = "#fff";
            Chart.defaults.font.size = 14;
            Chart.defaults.font.family = 'Poppins';
            Chart.defaults.font.weight = 500;
    
        // revChart
        // setup revChart
        const data = {
          labels: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
          datasets: [
            {
            label: 'Revenue (MEUR)',
            data: [0.1, 1.4, 2.7, 4.0, 5.3, 7.4, 20.6, 18.7, 28.9, 24.8, 36.5, 56.6, 64.5, 81.1, 113.3, 175.7, 201.7, 236.2, 297.2, 356.0],
            borderColor: "#E61f7c",
            backgroundColor: "#E61f7c",
            tension: 0.3,
            borderWidth: 5,
            },
            { 
              data: [0, 0, 0, 0, 0,	0, 0,	0, 21, 22.1, 26.5, 33.6, 48.5, 68.1, 81.3, 113.7, 114.7, 135.2,	167.2, 181.4],
              label: "International Revenue (MEUR)",
              borderColor: "#252525",
              backgroundColor: "#252525",
              tension: 0.3,
              borderWidth: 5,
            },
        ]
        };

        // config revChart
        const config = {
            type: 'line',
            data,
            options:{
                plugins: {
                    legend: {
                        labels: {
                            color: "252525"
                        }
                    }
                },
                animation: {
                    easing: 'easeInOutQuad',
                    duration: 2500
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: "252525"
                    }
        
                    },
                    y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: "252525"
                        }
                    }
                },
            }
        };

        // render revChart
        const revChart = new Chart(
            document.getElementById('revChart'),
            config
        );

    // fundChart
       
        // setup fundChart
            const data2 = {
                labels: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
                datasets: [
                    {
                    data: [0.3,	0.9, 1.3,	3, 5.4,	9.2, 15.1, 19.8, 31, 40.1, 45.9, 61.31, 70,	90, 111, 128,	136, 158,	178, 191.7],
                    label: "Public Funding (MEUR)",
                    borderColor: "#E61f7c",
                    backgroundColor: "#E61f7c",
                    tension: 0.3,
                    borderWidth: 5,
                    },
                    { 
                    data: [0.2, 1.3, 4.4,	8.6, 23.6, 41.8, 54.1, 59, 86, 109.9, 142.1, 171.1, 198.3, 218.3, 285.3, 363.3,	453.3, 530.3,	686.3, 932],
                    label: "Private Funding (MEUR)",
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                    tension: 0.3,
                    borderWidth: 5,
                    },
                ]
                };
        
        //config fundChart
            const config2 = {
                type: 'line',
                data: data2,
                options:{
                    plugins: {
                        legend: {
                            labels: {
                                color: "white"
                            }
                        }
                    },
                    animation: {
                        easing: 'easeInOutQuad',
                        duration: 2500
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white"
                        }
            
                        },
                        y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white"
                            }
                        }
                    },
                }
            };

            // render fundChart
            const fundChart = new Chart(
                document.getElementById('fundChart'),
                config2
            );


        // valChart
       
        // setup valChart
        const data3 = {
                labels: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
                datasets: [
                    {
                    data: [198.3,	128.3,	165.6, 193.5, 251.7, 301.4, 296.9, 389.3, 448.9, 984.1, 1067.1, 1713.1,	1834.1,	2350.0],
                    label: "Total company valuation end year 2021",
                    borderColor: "#E61f7c",
                    backgroundColor: "#E61f7c",
                    tension: 0.3,
                    borderWidth: 5,
                    },
                ]
                };
        
        //config valChart
            const config3 = {
                type: 'line',
                data: data3,
                options:{
                    plugins: {
                        legend: {
                            labels: {
                                color: "white"
                            }
                        }
                    },
                    animation: {
                        easing: 'easeInOutQuad',
                        duration: 2500
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white"
                        }
            
                        },
                        y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: "white"
                            }
                        }
                    },
                }
            };

            // render valChart
            const valChart = new Chart(
                document.getElementById('valChart'),
                config3
            );

        // devChart
       
            // setup devChart
            const data4 = {
                labels:['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
                datasets: [
                    { 
                    data: [2,13,13,22,28,40,48,53,59,67,73,79,107,131,143,168,184,211,238,258],
                    label: "Active companies",
                    backgroundColor: "#E61f7c",
                    borderColor: "#E61f7c",
                    tension: 0.3,
                    borderWidth: 0,
                    },
            
                    { 
                    data: [0,0,0,0,0,0,0,2,3,4,7,7,6,6,6,8,13,21,23,27],
                    label: "Mergers/Acquisitions",
                    backgroundColor: "#252525",
                    borderColor: "#252525",
                    tension: 0.3,
                    borderWidth: 0,
                    },

                    { 
                    data: [0,2,4,5,5,7,7,9,10,10,10,15,15,15,24,24,36,33,32,34],
                    label: "Living dead/changed idea",
                    backgroundColor: "#840B55",
                    borderColor: "#840B55",
                    tension: 0.3,
                    borderWidth: 0,
                    },

                    { 
                    data: [0,0,2,3,3,3,4,5,8,11,18,25,30,35,42,47,53,61,67,78],
                    label: "Discontinued",
                    backgroundColor: "#FFC000",
                    borderColor: "#FFC000",
                    tension: 0.3,
                    borderWidth: 0,
                    },
                ],
            };
            
            //config devChart
                const config4 = {
                    type: 'bar',
                    data: data4,
                    options:{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "white"
                                }
                            }
                        },
                        animation: {
                            easing: 'easeInOutQuad',
                            duration: 2500
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                            },
                            stacked: true,
                
                            },
                            y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                                },
                            stacked: true,
                            }
                        },
                    }
                };

                // render devChart
                const devChart = new Chart(
                    document.getElementById('devChart'),
                    config4
                );

            // femChart1
       
            // setup femChart1
            const data5 = {
                labels:['Sting companies with a female co-founder','Sting companies without a female co-founder'],
                datasets: [
                    { 
                    data: [61,39],
                    label: "Sting companies with a female co-founder",
                    backgroundColor: [
                        "#E61f7c",
                        "#fff",
                    ],
                    tension: 0.3,
                    borderWidth: 0,
                    },
                ],
            };
            
            //config femChart1
                const config5 = {
                    type: 'pie',
                    data: data5,
                    options:{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "white"
                                }
                            }
                        },
                        animation: {
                            easing: 'easeInOutQuad',
                            duration: 2500
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                            },
                            stacked: true,
                
                            },
                            y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                                },
                            stacked: true,
                            }
                        },
                    }
                };

                // render femChart1
                const femChart1 = new Chart(
                    document.getElementById('femChart1'),
                    config5
                );

            // femChart2
       
            // setup femChart2
            const data6 = {
                labels:['Male','Female'],
                datasets: [
                    { 
                    data: [64,36],
                    label: "Percentage of male/female in Sting companies",
                    backgroundColor: [
                        "#E61f7c",
                        "#fff",
                    ],
                    tension: 0.3,
                    borderWidth: 0,
                    },
                ],
            };
            
            //config femChart2
                const config6 = {
                    type: 'pie',
                    data: data6,
                    options:{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "white"
                                }
                            }
                        },
                        animation: {
                            easing: 'easeInOutQuad',
                            duration: 2500
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                            },
                            stacked: true,
                
                            },
                            y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                                },
                            stacked: true,
                            }
                        },
                    }
                };

                // render femChart2
                const femChart2 = new Chart(
                    document.getElementById('femChart2'),
                    config6
                );

                // femChart3
       
            // setup femChart3
            const data7 = {
                labels:['Female co-founders','Male co-founders'],
                datasets: [
                    { 
                    data: [60,40],
                    label: "Propel capital invested",
                    backgroundColor: [
                        "#E61f7c",
                        "#fff",
                    ],
                    tension: 0.3,
                    borderWidth: 0,
                    },
                ],
            };
            
            //config femChart3
                const config7 = {
                    type: 'pie',
                    data: data7,
                    options:{
                        plugins: {
                            legend: {
                                labels: {
                                    color: "white"
                                }
                            }
                        },
                        animation: {
                            easing: 'easeInOutQuad',
                            duration: 2500
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                            },
                            stacked: true,
                
                            },
                            y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: "white"
                                },
                            stacked: true,
                            }
                        },
                    }
                };

                // render femChart3
                const femChart3 = new Chart(
                    document.getElementById('femChart3'),
                    config7
                );
            </script>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js'></script>
<script src='https://cdn.jsdelivr.net/jquery.counterup/1.0/jquery.counterup.min.js'></script>
<script>
$('.counter').counterUp({
 delay: 10,
 time: 1000
});
$('.counter').addClass('animated fadeIn');
</script>
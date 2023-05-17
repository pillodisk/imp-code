import speedtest

test=speedtest.Speedtest()

down_speed = round(test.download()/1000000)
up_speed = round(test.upload()/1000000)
print("Download speed is ",down_speed,"Mbps")
print("Upload Speed is",up_speed,"Mbps")

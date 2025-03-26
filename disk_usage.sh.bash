threshold=75
disk_usage=85
if [ $disk_usage -gt $threshold ];
then
echo "Warning: Disk usage is at $disk_usage%, which exceeds the threshold which is $threshold%"
else
exit
fi
done
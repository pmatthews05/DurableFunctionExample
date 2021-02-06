$url = "http://localhost:7071/api/GetStatusTrigger"

$results = Invoke-WebRequest -Uri:$url -Method 'GET'

Write-host $results.Content
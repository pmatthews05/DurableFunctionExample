$url = "http://localhost:7071/api/orchestrators/DurableFunctionsOrchestratorJS"

$numberOfCalls = 120
$successCalls = 0;
for ($i = 0; $i -lt $numberOfCalls; $i++) {
    $callResults = Invoke-WebRequest -Uri:$url -Method 'GET'
    if($callResults.StatusCode -eq 202){
        $successCalls++;
        Write-host "Called $($successCalls) times"
    }

    if($callResults.StatusCode -eq 429){
        Start-Sleep -Seconds 2
    }
}


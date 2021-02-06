To help solve issue https://github.com/Azure/azure-functions-durable-js/issues/236

# Setup
* Install v3.x - Windows 64-bit Azure Functions Core Tools
## Install project
* Create folder and open with VSCode
* In terminal type
```js
func init
```
* Select worker runtime - node
* Select language - JavaScript 

## Prepare functions

### Starter
```
func new 
```
- *Type*: Durable Functions Http starter
- *Name*: DurableFunctionsHttpStart

### Orchestration
```
func new 
```
- *Type*: Durable Functions orchestrator
- *Name*: DurableFunctionsOrchestratorJS

### Activity
```
func new 
```
- *Type*: Durable Functions activity
- *Name*: Hello

## Configure before running
### NPM Install
Type
```
npm install durable-functions
npm install
```
### Update Host

Update the Host file to include
```json
 "extensions": {
    "durableTask": {
      "localRpcEndpointEnabled": true
    }
  },
  "extensionBundle": {
    "id": "Microsoft.Azure.Functions.ExtensionBundle",
    "version": "[2.*, 3.0.0)"
  }
```

### Update local.settings.json
Ensure the "AzureWebJobsStorage" is pointing to your Azure Storage. Either using connection string of Azure Storage, or below for Storage Emulator. 
```
UseDevelopementStorage=true
```

## Running the code
Using VS Code, kick off your code.
```
func host start
```

### Running many times.
Using the provided PowerShell code (change url if required). This will call 120 times.
```ps
.\run-DurableFunctions.ps1
```

### Check Status
Using the provided PowerShell code (change url if required). This will get a status count
```ps
.\run-GetStatusCount.ps1
```
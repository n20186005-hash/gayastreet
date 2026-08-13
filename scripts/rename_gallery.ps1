$ErrorActionPreference = 'Stop'
$dir = 'c:/Users/Administrator/Documents/GitHub/gayastreet/public/gallery'
$i = 1
Get-ChildItem -LiteralPath $dir -Filter '*.jpg' | Sort-Object Name | ForEach-Object {
    Rename-Item -LiteralPath $_.FullName -NewName ('gaya-street-market-{0}.jpg' -f $i)
    $i++
}
Get-ChildItem -LiteralPath $dir | Select-Object Name

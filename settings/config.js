const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="CandraVima"
global.ownernumber = "6285229174013"
global.botname = "Candd-Bot"
global.thumbnail = fs.readFileSync("./settings/pp.jpg") //sesuaikan dengan nama foto
global.background = fs.readFileSync("./settings/bck.jpg")
global.lolkey = 'RIFQIBOTZ' //apikey
global.limit = {
		free:20,
		premium:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

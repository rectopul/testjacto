
const axios = require('axios')

const informations = require('../../modules/informations')

module.exports = {

    async index(req, res) {
        const { translate } = req.params
        const request = await axios.get(`https://jacto.com/api/v1/products/132`)
        const infos = request.data

        let abrevLang = 'PT'

        if(translate) abrevLang = translate.substr(translate.length - 2, translate.length)

        const name = infos.name[translate] || infos.name[translate].pt_BR


        const description = infos.description[translate] || infos.description.pt_BR

        const features = infos.features.map(f => {
            return {
                image: f.image,
                title: f.title[translate] || f.title.pt_BR,
                description: f.description[translate] || f.description.pt_BR,
            }
        })

        const specifications = infos.specifications.map(i => {
             
            return {
                title: i.title[translate] || i.title.pt_BR,
                items: i.items.map(e => {
                    return {
                        title: e.title[translate] || e.title.pt_BR,
                        description: e.description[translate] || e.description.pt_BR
                    }
                })
            }
        })

        const files = infos.files.map(i => {
            let e = i

            e.name = e.name[translate] || e.name.pt_BR
            e.file = e.file[translate] || e.file.pt_BR

            return e
        })

        console.log(`especificações`, files)
        return res.render('pages/index', {
            title: name,
            infos,
            description: description,
            translate: translate || 'pt_BR',
            abrevLang,
            features,
            specifications,
            related: {
                title: infos.related_jactoparts_title[translate] || infos.related_jactoparts_title.pt_BR,
                link: infos.related_jactoparts_url[translate] || infos.related_jactoparts_url.pt_BR
            },
            files
        })
    }
}

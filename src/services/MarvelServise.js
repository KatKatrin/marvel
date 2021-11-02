class Marvelservice{
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=b7c38024b7058065c38fbd42dd9008a9';

  getResourse= async(url) => {
    let res = await fetch(url);

    if(!res.ok){
      throw new Error(`Could not find ${url}, status: ${res.status}`)
    }
    return await res.json();
  }


  getAllCharacters = async () => {
    const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
    return res.data.results.map(this._transformcharacter)
  }

  getCharacter = async (id) => {
    const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformcharacter(res.data.results[0])
  }

  _transformcharacter = (char) => {
    return {
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'ОПИСАНИЕ отсутствует',
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url
    }
  }

} 

export default Marvelservice;
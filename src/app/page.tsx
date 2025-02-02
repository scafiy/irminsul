import { getCharacters, getWeapons, getArtifacts } from '@/utils/genshinData';
import Item from '@/components/explore/Item';
import { getAssetURL } from '@/utils/getAssetURL'
import Image from 'next/image'

//meta data
export const metadata = {
    title: "Irminsul.moe",
    metadataBase: new URL("https://irminsul.moe"),
    description: "Repository for all of metagaming information of Teyvat",
    keywords: [
        "Genshin Impact", 
        "Teyvat", 
        "Irminsul", 
        "Repository", 
        "Information", 
        "Metagaming", 
        "Database", 
        "Meta", 
        "Theorycrafting", 
        "Knowledge Base", 
        "Genshin Impact", 
        "Teyvat",
        "Guides",
        "Articles",
        "Genshin Data",
        "Tools",
    ],
    author: "Irminsul",
    robots: "index, follow",
}

export default async function Home() {
    const characters = await getCharacters()
    const weapons = await getWeapons()
    const artifacts = await getArtifacts()

    const latestCharacters = characters.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()).slice(0, 5);
    const latestWeapons = weapons.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime()).slice(0, 5);
    const latestArtifacts = artifacts.sort((a, b) => Number(b.release_version) - Number(a.release_version)).slice(0, 5);

    return (
        <div className="">
            {/* <div className="flex flex-col items-left justify-center p-10 pb-0">
                <p className="text-left pt-2">Disclaimer: Irminsul is currently in open beta. Expect somethings to not work or break. </p>
            </div> */}

            <div className="flex flex-col items-left justify-center p-10 pb-0" style={{ backgroundImage: "url('')" }}>
                <h1 className="text-6xl font-bold text-white text-left">
                    &quot;Repository for all of the information and memories of Teyvat&quot;
                </h1>
                <p className=" mb-8 text-white text-left pt-2" >- It is unclear exactly how the repository works, However, the Traveler seems to correctly understand how the repository works.</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-10 pt-0">

            <section className="w-full">
                <h2 className="text-2xl font-semibold mb-2">Latest Characters</h2>
                <div className="flex" style={{ overflowX: "auto"}}>
                    {latestCharacters.map((character) => (
                        <Item 
                            category="character"
                            src={getAssetURL("character", character.name, "avatar.png")}
                            name={character.name}
                            rarity={character.rarity}
                            element={character.element}
                            key={character.id}
                        />
                    ))}
                </div>
            </section>

            <section className="w-full">
                <h2 className="text-2xl font-semibold mb-2">Latest Weapons</h2>
                <div className="flex" style={{ overflowX: "auto"}}>
                    {latestWeapons.map((weapon) => (
                        <Item 
                            category="weapon"
                            src={getAssetURL("weapon", weapon.name, "baseicon.png")}
                            name={weapon.name}
                            rarity={weapon.rarity}
                            key={weapon.id}
                        />
                    ))}
                </div>
            </section>

            <section className="w-full">
                <h2 className="text-2xl font-semibold mb-2">Latest Artifacts</h2>
                <div className="flex" style={{ overflowX: "auto"}}>
                    {latestArtifacts.map((artifact) => (
                        <Item 
                            category="artifact"
                            src={getAssetURL("artifact", artifact.name, "flower.png")}
                            name={artifact.name}
                            rarity={artifact.rarity_max}
                            key={artifact.id}
                        />  
                    ))}
                    </div>
                </section>
            </div>
        </div>
    );
} 
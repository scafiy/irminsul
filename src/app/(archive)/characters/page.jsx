import explorePageCSS from '../../../css/explorePage.module.css'
import CharacterItemList from '../../../components/explore/CharacterItemList'
import { Button } from '@mui/material';

export const metadata = {
  title: "Characters | Irminsul",
};

export default function Characters() {

    return (
      <div id="characters-page">

        <div className={explorePageCSS.header}>
          <h1 className={explorePageCSS.ingameTitle}>Characters</h1>
          <div className={explorePageCSS.controller}>
            <Button>Filter</Button>
          </div>
        </div>
        <CharacterItemList/>
        
      </div>
    );
  }
  
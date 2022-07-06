import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    
    const {theme} = useTheme();
  
    return (
    <div style={{ 
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de la app"
            width={70}
            height={70}
        />

        <Text color="white" h2><Link href={'/'}>Pokémon</Link></Text>
        <Text color="white" h3></Text>

        <Spacer css={{flex:1}}/>

        <Text color="white"><Link href={'/favorites'}>Favoritos</Link></Text>
    </div>
  )
}

import { View, Text, ScrollView } from "react-native";
import CardCategoria from "mercadinho/src/components/CardCategoria/Card";
import CardOfertas from "mercadinho/src/components/CardOfertas/Card";
import CardProduto from "mercadinho/src/components/CardProduto/Card";
import styles from "./style";

function Destaque(props) {
  return (
    <View style={styles.tituloDiv}>
      <Text style={styles.TextH2}>{props.titulo}</Text>
    </View>
  );
}

export default function Main(props) {
  return (
    <View style={styles.main}>
      <View>
        <View style={styles.produtosOfertas}>
          <Destaque titulo={"Ofertas do dia"} />
          <ScrollView horizontal={true}>
            <CardOfertas
              nomeProduto="Espinafre Gasparin"
              caminhoImagem={{
                uri: "https://api.cndr.me/images/png/2070217.png",
              }}
            />
            <CardOfertas
              nomeProduto="Tomate Grape Gasparin"
              caminhoImagem={{
                uri: "https://api.cndr.me/images/png/2070316.png",
              }}
            />
            <CardOfertas
              nomeProduto="Sorvete Nestlé"
              caminhoImagem={{
                uri: "https://api.cndr.me/images/png/1924562.png",
              }}
            />
            <CardOfertas
              nomeProduto="Bife da Alcatra Bovina"
              caminhoImagem={{
                uri: "https://api.cndr.me/images/png/1891761.png",
              }}
            />
            <CardOfertas
              nomeProduto="Lasanha Seara"
              caminhoImagem={{
                uri: "https://api.cndr.me/images/png/547190.png",
              }}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.categorias}>
        <Destaque titulo={"Temos tudo aqui!"} />
        <View style={styles.categoriasAleatorias}>
          <CardCategoria
            nomeProduto="Carros, motos e outros"
            caminhoImagem={{
              uri: "https://http2.mlstatic.com/D_NQ_NP715499-MLA53971088073_022023-OO.webp",
            }}
          />
          <CardCategoria
            nomeProduto="Beleza e cuidados pessoais"
            caminhoImagem={{
              uri: "https://http2.mlstatic.com/D_NQ_NP612165-MLA49718738964_042022-B.webp",
            }}
          />
          <CardCategoria
            nomeProduto="Casa, movéis e decorações"
            caminhoImagem={{
              uri: "https://http2.mlstatic.com/D_NQ_NP_791168-MLB31485383691_072019-O.webp",
            }}
            adicionar={props.adicionar}
          />
          <CardCategoria
            nomeProduto="Festa e lembrancinhas"
            caminhoImagem={{
              uri: "https://http2.mlstatic.com/D_NQ_NP729080-MLA44284581058_122020-B.webp",
            }}
          />
        </View>
      </View>
      <View style={styles.produtos}>
        <Destaque titulo={"Mais vendidos da semana"} />
        <CardProduto
          nomeProduto="Lasanha Seara"
          valorProduto={"12,93"}
          caminhoImagem={{ uri: "https://api.cndr.me/images/png/547190.png" }}
          adicionar={props.adicionar}
        />
        <CardProduto
          nomeProduto="Massa de Sêmola Ninfa"
          valorProduto={"2,69"}
          adicionar={props.adicionar}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/1339449.png",
          }}
        />
        <CardProduto
          nomeProduto="Biscoito Tortinhas Marilan"
          valorProduto={"2,27"}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/1980390.png",
          }}
          adicionar={props.adicionar}
        />
        <CardProduto
          nomeProduto="Sabão em Pó Surf"
          valorProduto={"7,69"}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/2041333.png",
          }}
          adicionar={props.adicionar}
        />
        <CardProduto
          nomeProduto="Espinafre Gasparin"
          valorProduto={"3,99"}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/2070217.png",
          }}
          adicionar={props.adicionar}
        />
        <CardProduto
          nomeProduto="Tomate Grape Gasparin"
          valorProduto={"4,79"}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/2070316.png",
          }}
          adicionar={props.adicionar}
        />
        <CardProduto
          nomeProduto="Sorvete Nestlé"
          valorProduto={"14,86"}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/1924562.png",
          }}
          adicionar={props.adicionar}
        />
        <CardProduto
          nomeProduto="Bife da Alcatra Bovina"
          valorProduto={"39,85"}
          caminhoImagem={{
            uri: "https://api.cndr.me/images/png/1891761.png",
          }}
          adicionar={props.adicionar}
        />
      </View>
    </View>
  );
}

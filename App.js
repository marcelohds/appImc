import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Component} from 'react-native';

export default function App() {

	const[peso, setPeso] = useState();
	const[altura, setAltura] = useState();
	const[resultado, setResultado] = useState();
	const[nivel, setNivel] = useState();

	
	function imc(){
		let r = peso / (altura * altura);
		setResultado(r.toFixed(2));
		
		if (r <= 16.9){
			let n = ("Muito abaixo do peso!");
			setNivel(n);		
		}
		
		else if (r >= 17 && r <= 18.4){
			let n = ("Abaixo do peso!");
			setNivel(n);
		}
		
		else if (r >= 18.5 && r <= 24.9){
			let n = ("Peso normal!");
			setNivel(n);
		}
		
		else if (r >= 25 && r <= 29.9){
			let n = ("Acima do peso!");
			setNivel(n);
		}
		
		else if (r >= 30 && r <= 34.9){
			let n = ("Obesidade grau I!");
			setNivel(n);
		}
		
		else if (r >= 35 && r <= 40){
			let n = ("Obesidade grau II!");
			setNivel(n);
		}
		
		else if (r >= 40){
			let n = ("Obesidade grau III!");
			setNivel(n);
		}
	}
	
	function limpar(){
		setResultado("");
		setAltura("");
		setPeso("");
	}

  return (
    <View style={styles.container}>
		  <View style={styles.titulo}>
			  <Text style={styles.textoTitulo}>CALCULADORA IMC</Text>
		  </View>
		  
		  <View style={styles.blocoImagem}>
		  		<Image
				 	style={styles.imagem}
				 	source={require('./assets/imc.png')}
				/>
		  </View>
		  
		  
		  <View style={styles.bloco}>
				<Text style={styles.label}>Peso (KG): </Text>
			  	<TextInput
					maxLength={6}
					style={styles.input}
					value={peso}
					onChangeText={(valor)=>setPeso(valor)}
					placeholder="Exemplo 64.350"
					placeholderTextColor="#b1aeae"
				/>
			  
		  		<Text style={styles.label}>Altura (Metro): </Text>
			  	<TextInput
					maxLength={6}
					style={styles.input}
					value={altura}
					onChangeText={(valor)=>setAltura(valor)}
					placeholder="Exemplo 1.72"
					placeholderTextColor="#b1aeae" 
				/>
			  
			  <View style={styles.blocoBotao}>
				<TouchableOpacity style={styles.botao} onPress={imc}>
					<Text style={styles.textoBotao}>Calcular</Text>
				</TouchableOpacity>
				  
				<TouchableOpacity style={styles.botao} onPress={limpar}>
					<Text style={styles.textoBotao}>Limpar</Text>
				</TouchableOpacity>
			  </View>
			  
			<View style={styles.label1}>
				<Text style={styles.label1}> Resultado: {resultado} </Text>
			</View>
			
			<View style={styles.label1}>
				<Text style={styles.label1}> Classificação: {nivel} </Text>
			</View>
			
		  </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#fff'
  },
	
	titulo: {
		backgroundColor: '#ffa500',
		height: '10%',
		justifyContent: 'center'
	},
	
	textoTitulo: {
		fontSize: 20,
		textAlign: 'center',
		color: '#fff'
	},
				  
	imagem: {
		width: 120,
		height: 120
	},
	
	blocoImagem: {
		alignItems: 'center',
		marginTop: 30
	},
	
	bloco:{
		width: '70%',
		marginLeft: '15%'
		
	},

	input: {
	 	backgroundColor: '#fff',
		borderWidth: 1,
		fontSize: 15,
		borderRadius: 5
	},
	
	label: {
		fontSize: 15,
		marginTop: 10
	},
	
	label1: {
		fontSize: 15,
		marginTop: 10,
		textAlign: 'center'
	},
	
	
	blocoBotao:{
		flexDirection: 'row',
		justifyContent: 'center'
	},
	
	botao:{
		width: '25%',
		marginTop: 20,
		marginLeft: '05%',
		marginRight: '05%',
		alignItems: 'center',
		backgroundColor: '#ffa500',
		borderWidth: 1
	},
	
	textoBotao: {
		fontSize: 15,
		textAlign: 'center'		
	},
});

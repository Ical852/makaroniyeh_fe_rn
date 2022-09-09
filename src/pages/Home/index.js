import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { customColors, customFonts, linkApi } from '../../utils'
import { IcLine, IcPlus, IcScan, IcSearch, Makaroni1, Makaroni10, Makaroni11, Makaroni12, Makaroni13, Makaroni2, Makaroni3, Makaroni4, Makaroni5, Makaroni6, Makaroni7, Makaroni8, Makaroni9, Profile } from '../../assets'
import { BestSellerItems, BottomNavIcon, CatNewMkrn, Gap, NewItems, PopularItems, SuperSpesialItems, TitleCustomed } from '../../components'
import axios from 'axios'

const Home = () => {
  const [bestSeller, setBestSeller] = useState([])
  const [special, setSpecial] = useState([])
  const [popular, setPopular] = useState([])
  const [categories, setCategories] = useState([])
  const [currentProducts, setCurrentProducts] = useState([])
  const [cat, setCat] = useState("All")

  const changeCat = (newcat, id) => {
    setCat(newcat)
    if (id == "all") {
      getAllProduct()
    } else {
      getByCategory(id)
    }
  }

  const getByCategory = async (id) => {
    await axios.get(`${linkApi}/products/${id}`)
      .then(res => {
        setCurrentProducts(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getBestSeller = async () => {
    await axios.get(`${linkApi}/products/best`)
      .then(res => {
        setBestSeller(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getSpecial = async () => {
    await axios.get(`${linkApi}/products/special`)
      .then(res => {
        setSpecial(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getPopular = async () => {
    await axios.get(`${linkApi}/products/popular`)
      .then(res => {
        setPopular(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getCategory = async () => {
    await axios.get(`${linkApi}/categories`)
      .then(res => {
        setCategories(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getAllProduct = async () => {
    await axios.get(`${linkApi}/products`)
      .then(res => {
        setCurrentProducts(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getBestSeller()
    getSpecial()
    getPopular()
    getCategory()
    getAllProduct()
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View style={styles.headercontent}>
            <View style={styles.textcontent}>
              <Text style={styles.headertext}>Hello, Shalahuddin</Text>
            </View>
            <Image source={Profile} style={styles.profileimg}/>
          </View>

          <View style={styles.searchbox}>
            <IcSearch/>
            <TextInput placeholder='Search your makaroni here' style={styles.searchinput}/>
          </View>
        </View>

        <View style={styles.mpaybox}>
          <IcScan/>
          <Gap width={18}/>
          <IcLine/>
          <Gap width={18}/>
          <View style={styles.mpaytext}>
            <Text style={styles.mpaytextmoney}>IDR 50.000</Text>
            <Text style={styles.mpaysubtext}>Your makaroniPay Right Now</Text>
          </View>
          <View style={styles.plusbtn}>
            <IcPlus/>
          </View>
        </View>

        <Gap height={20}/>
        <TitleCustomed title={"Best Seller Makaroni"} subtitle={"Get best seller makaroni right now !"}/>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24}/>
          {
            bestSeller.length > 0 &&
            bestSeller.map(item => {
              return (
                <BestSellerItems
                  key={item.id} 
                  image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} 
                  title={item.name} 
                  cat={item.category.name} 
                  price={item.price}
                />
              )
            })
          }
        </ScrollView>

        <TitleCustomed title={"Super Special Makaroni"} subtitle={"Get super special makaroni now before it’s too late !"} />
        <Gap height={16}/>
        
        <View style={styles.special}>
          {
            special.length > 0 &&
            special.map((item, index) => {
              return index < 2 && index == 0 ? (
                <>
                  <SuperSpesialItems key={item.id} image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} title={item.name} cat={item.category.name} price={item.price}/>
                  <Gap width={15}/>
                </>
              ) : index < 2 && (
                  <SuperSpesialItems key={item.id} image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} title={item.name} cat={item.category.name} price={item.price}/>
              )
            })
          }
        </View>

        <View style={styles.special}>
          {
            special.length > 0 &&
            special.map((item, index) => {
              return index > 1 && index == 2 ? (
                <>
                  <SuperSpesialItems key={item.id} image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} title={item.name} cat={item.category.name} price={item.price}/>
                  <Gap width={15}/>
                </>
              ) : index > 1 && (
                  <SuperSpesialItems key={item.id} image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} title={item.name} cat={item.category.name} price={item.price}/>
              )
            })
          }
        </View>

        <Gap height={4}/>
        <TitleCustomed title={"Popular Makaroni"} subtitle={"Get popular makaroni right now !"}/>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24}/>
          {
            popular.length > 0 &&
            popular.map(item => {
              return (
                <PopularItems
                  key={item.id}
                  image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} 
                  title={item.name} 
                  price={item.price} 
                  cat={item.category.name}
                />
              )
            })
          }
          <Gap width={4}/>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24}/>
          <CatNewMkrn title={"All Makaroni"} active={cat == "All"} onPress={() => changeCat("All", "all")}/>
          {
            categories.length > 0 &&
            categories.map(item => {
              return (
                <CatNewMkrn
                  key={item.id}
                  title={item.name} 
                  active={cat == item.name} 
                  onPress={() => changeCat(item.name, item.id)}
                />
              )
            })
          }
          <Gap width={12}/>
        </ScrollView>

        <Gap height={16}/>
        <TitleCustomed title={"New Makaroni"} subtitle={"Get new makaroni right now !"} />
        <Gap height={16}/>
        
        {
          currentProducts.length > 0 &&
          currentProducts.map(item => {
            return (
              <NewItems
                key={item.id} 
                image={{ uri : `http://192.168.100.15:8000/images/${item.image}` }} 
                title={item.name} 
                cat={item.category.name} 
                price={item.price} 
                desc={item.desc}
              />
            )
          })
        }

        <View style={styles.showallcontainer}>
          <Text style={styles.showall}>Show all Makaroni </Text>
        </View>
                 
      </ScrollView>

      <View style={styles.bottomnav}>
        <BottomNavIcon icon={"Home"} active/>
        <BottomNavIcon icon={"Explore"}/>
        <BottomNavIcon icon={"Wish"}/>
        <BottomNavIcon icon={"Profile"}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: customColors.white
  },
  content : {
    flex: 1,
  },
  header : {
    height : 199,
    backgroundColor : customColors.primary,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius : 12,
    paddingHorizontal : 24,
    paddingTop : 24
  },
  headercontent : {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileimg : {
    width: 60,
    height: 60,
  },
  headertext : {
    fontSize : 24,
    fontFamily : customFonts.primary.semiBold,
    color: customColors.white,
    maxWidth: 160
  },
  textcontent : {
    flex: 1,
  },
  searchbox : {
    height: 45,
    backgroundColor: customColors.white,
    marginTop : 12,
    flexDirection : 'row',
    paddingHorizontal : 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  searchinput : {
    fontFamily : customFonts.primary.medium,
    color : customColors.black,
    flex: 1,
    fontSize : 14,
    marginLeft: 12
  },
  mpaybox : {
    height: 60,
    backgroundColor : customColors.white,
    borderRadius: 12,
    elevation: 5,
    marginHorizontal: 24,
    marginTop : -32,
    paddingVertical : 11,
    paddingLeft: 18,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomnav: {
    height: 71,
    backgroundColor: customColors.white,
    elevation : 10,
    justifyContent: 'space-around',
    flexDirection : 'row',
    alignItems: 'center'
  },
  plusbtn : {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customColors.secondary,
    borderRadius : 4
  },
  mpaytext : {
    flex: 1,
  },
  mpaytextmoney : {
    fontSize: 14,
    fontFamily: customFonts.primary.semiBold,
    color: customColors.primary
  },
  mpaysubtext : {
    fontSize : 10,
    fontFamily: customFonts.primary.regular,
    color : customColors.text.secondary
  },
  special : {
    flexDirection: 'row',
    marginHorizontal: 24
  },
  showall : {
    fontSize : 12,
    fontFamily: customFonts.primary.medium,
    color: customColors.primary,
  },
  showallcontainer : {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 34
  }
})
import firebaseInstance from '../../middleware/firebase/index'
import firebaseDataBase from '../../middleware/firebase/RTdatabase'

export default {
    getProducts: async ({commit}, tableName) => {
        let products = firebaseDataBase.getData({entity: tableName})
    },
    insertProduct: async ({commit}, newProduct) => {
        await firebaseDataBase.insertItem({item: newProduct})
    },
    updateProduct: async ({commit}, Product) => {
        await firebaseDataBase.updateItem({item: Product})
    },
    removeProduct: async ({commit}, Product) => {
        await firebaseDataBase.removeItem({item: Product, itemId: Product.id})
    },
}
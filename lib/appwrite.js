import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.nsbm.ceylontour',
    projectId: '66d481e2000dbcae68f1',
    databaseId: '66d5d8290027fbfbd495',
    usercollectionId: '66d5d8710022d15c8b8f',
    placescollectionId: '66d5d8d900133990a37d',
    storageId: '66d5dcc80035ac4beed7',

}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    usercollectionId,
    placescollectionId,
    storageId,
} = config
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async(email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if (!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password);
        const newUser = await databases.createDocument(
            config.databaseId,
            config.usercollectionId,
            ID.unique(), {
                accountId: newAccount.$id,
                email,
                username,
                visit: avatarUrl,

            }

        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async(email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

// Get Current User
/*export const  getCurrentUser = async () => {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        config.databaseId,
        config.usercollectionId,
        [Query.equal('accountId', currentAccount.$id)]
      )
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      
    }
}*/

export async function getAllPosts() {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            placescollectionId
        );

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}
// Get latest created video posts
export async function getLatestPosts() {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            placescollectionId, [Query.orderDesc('$cretaedAt', Query.limit(7))]
        );

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}
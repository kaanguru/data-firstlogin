import Vue from 'nativescript-vue'
import welcome from './components/welcome.vue'
import login from './components/login.vue'
import VueDevtools from 'nativescript-vue-devtools'
import * as ApplicationSettings from "tns-core-modules/application-settings";
import VueApollo from "vue-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from "apollo-link-context";
import store from './store'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true

/////////////// APOLLO
Vue.use(VueApollo);
const httpLink = new HttpLink({
    uri: "https://sebapi.com/graphql"
});
const authLink = setContext((_, { headers }) => {
    // get the authentication token from ApplicationSettings if it exists
    var tokenInAppSettings = ApplicationSettings.getString("token");
    // return the headers to the context so HTTP link can read them
    return {
        headers: {
            ...headers,
            authorization: tokenInAppSettings
                ? `Bearer ${tokenInAppSettings}`
                : null
        }
    };
});
export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});


new Vue({
  store,
  apolloProvider,
  render: h => h('frame', [h(ApplicationSettings.hasKey("token")? welcome : login )])
}).$start()

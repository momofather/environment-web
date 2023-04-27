const URL = {
    'dev': 'http://172.16.2.210:8080/environment-api/',
    'test': 'http://172.16.2.210:8080/environment-api/',
    'prod': 'http://172.16.2.210:8080/environment-api/',
}
export default URL[process.env.REACT_APP_PROXY];
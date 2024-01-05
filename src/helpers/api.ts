import { request } from './axios';

// api helper to fetch data from the backend
export const fetchData = async (url:string) => {
  try {
    console.log('url here', url)
    const response:any = await request(`${url}`);
    console.log('response', response.data)
    return response.data
  } catch (err) {
    console.log('error', err)
    return err
  }
}

// api helper to edit data with put
export const editData = async (url: any, data: any) => {
  try {
    const options:{} = {
      method: 'PUT',
      'Content-Type': 'application/json;charset=UTF-8',
      data
    }
    const response:any = await request(url, options)
    console.log("method", options)
    console.log('response', response.data)
    return response.data
  } catch (err:any) {
    console.log('err', err.response)
    // console.log("method", options)
    return err?.response
  }
}

// api helper to edit data with put
export const deleteData = async (url: any, data: any) => {
  try {
    const options:{} = {
      method: 'DELETE',
      'Content-Type': 'application/json;charset=UTF-8',
      data
    }
    const response:any = await request(url, options)
    console.log("method", options)
    console.log('response', response.data)
    return response.data
  } catch (err:any) {
    console.log('err', err.response)
    // console.log("method", options)
    return err?.response
  }
}
// api helper to download document from the backend
// export const downloadData = async (title:any, url:any, format:any, token:any) => {
//   const config:any = { method: 'GET', url, responseType: 'arraybuffer', headers: { Authorization: `Bearer ${token}` }}

//   try {
//     // console.log('token here', token)
//     // console.log('url here', url)
//     const response = await axios(config);

//     const outputFilename = `${title}${format}`;

//     // If you want to download file automatically using link attribute.
//     const url = URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', outputFilename);
//     document.body.appendChild(link);
//     link.click();

//     console.log('response', response)
//     return response
//   } catch (err) {
//     console.log('error', err)
//     return err
//   }
// }

// api helper to fetch data by ID from the backend
// export const fetchDataByParams = async (url: any, token:any) => {
//   try {
//     const response = await axios.get(`${url}`, { headers: { Authorization: `Bearer ${token}` } })
//     // console.log('response', response)
//     return response
//   } catch (err) {
//     return err
//   }
// }

// api helper to add json data to the backend
export const addData = async (url:any, data: any, token?:string) => {
  try {
    const options:{} = {
      method: 'POST',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8',
      data
    }
    const response:any = await request(url, options)
    console.log('response', response)
    // setTimeout(() => {
    //   store.dispatch()
    // })
    console.log('response in here is, ', response)
    const status:number = response.status;
    const res:{} = response.data;
    return {
      status,
      res
    }
  } catch (err:any ) {
    console.log('err in here', err, typeof(err))
    console.log('err in here', err.response, typeof(err))
    console.log('err in here', err.response?.data?.message, typeof(err))
    console.log('err in here', err.response?.status, typeof(err))
    console.log('err in here', err.message, typeof(err))
    const status:number = err.response?.status
    const message:number = err.response?.data?.message ?? err?.message
    return {
      status,
      message
    }
  }
}

// api helper to add multipart-formdata to the backend
export const addFileData = async (url:any, data: any, token?:string) => {
  try {
    const options:{} = {
      method: 'POST',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data;',
      data
    }
    console.log('adding file data with options', options)
    console.log('adding the following file data', data.get('file'))
    const response:any = await request(url, options)
    console.log('response', response)
    // setTimeout(() => {
    //   store.dispatch()
    // })
    console.log('response in here is, ', response)
    const status:number = response.status;
    const res:{} = response.data;
    return {
      status,
      res
    }
  } catch (err:any ) {
    console.log('err in here', err, typeof(err))
    console.log('err in here', err.response, typeof(err))
    console.log('err in here', err.response?.data?.message, typeof(err))
    console.log('err in here', err.status, typeof(err))
    console.log('err in here', err.message, typeof(err))
    const status:number = err?.status
    const message:number = err?.message
    return {
      status,
      message
    }
  }
}

// api helper to add empty data to the backend
export const addEmptyData = async (url:string, token?:string) => {
  try {
    const options:{} = {
      method: 'POST',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8'
    }
    const response:any = await request(url, options)
    console.log('response', response)
    // setTimeout(() => {
    //   store.dispatch()
    // })
    console.log('response in here is, ', response)
    const status:number = response.status;
    const res:{} = response.data;
    return {
      status,
      res
    }
  } catch (err:any ) {
    console.log('err in here', err, typeof(err))
    console.log('err in here', err.response, typeof(err))
    console.log('err in here', err.response?.data?.message, typeof(err))
    console.log('err in here', err.response?.status, typeof(err))
    console.log('err in here', err.message, typeof(err))
    const status:number = err.response?.status
    const message:number = err.response?.data?.message
    return {
      status,
      message
    }
  }
}

// const response = await axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data'}
//     })

// export const addDataFile = async (url: any, data: any, token:any) => {
//   try {
//     const response = await axios.post(url, data, { headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`}
//   })
//     console.log('response', response)
//     // setTimeout(() => {
//     //   store.dispatch()
//     // })
//     return response
//   } catch (err) {
//     console.log('err', err)
//     return err
//   }
// }

// api helper to edit data in the backend
// export const editData = async (url: any, payload: any, token:any) => {
//   try {
//     const response = await axios.patch(url, payload, { headers: { Authorization: `Bearer ${token}` } })
//     console.log('response dat we see', response)
//     console.log('response in here is, ', response)
//     return response
//   } catch (err) {
//     return err
//   }
// }

// api helper to edit data in the backend
// export const editDataPut = async (url: any, payload: any, token:any) => {
//   try {
//     const response = await axios.put(url, payload, { headers: { Authorization: `Bearer ${token}` } })
//     console.log('response of which', response)
//     console.log('response in here is, ', response)
//     return response
//   } catch (err) {
//     return err
//   }
// }

// api helper to edit data without any payload in the backend
// export const editPutData = async (url: any, token:any) => {
//   try {
//     const response = await axios.put(url, { headers: { Authorization: `Bearer ${token}` } })
//     console.log('response of which', response)
//     console.log('response in here is, ', response)
//     return response
//   } catch (err) {
//     return err
//   }
// }

// api helper to delete data from the backend
// export const removeData = async (url: any, token:any) => {
//   // console.log('token here', token)
//   console.log('url here', url)
//   console.log('i am here')

//   try {
//     const response = await axios.delete(url, { headers: { Authorization: `Bearer ${token}` } })
//     return response
//   } catch (err) {
//     return err
//   }
// }

// api helper to delete data from the backend
// export const deleteData = async (url: any, token:any) => {
//   // console.log('token here', token)
//   console.log('url here', url)
//   console.log('i am here')

//   try {
//     const response = await axios.post(url, { headers: { Authorization: `Bearer ${token}` } })
//     return response
//   } catch (err) {
//     return err
//   }
// }
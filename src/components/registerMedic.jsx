import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './register.module.css';

const RegisterMedic = () => {
 const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    idCard: '',
    specialty: '',
 };

 const validationSchema = Yup.object({
    firstname: Yup.string().required('El nombre es requerido'),
    lastname: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    password: Yup.string().required('La contraseña es requerida'),
    idCard: Yup.number().required('El número de identificación es requerido'),
    specialty: Yup.string().required('La especialidad es requerida'),
 });

 const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Aquí puedes manejar el envío de los datos del formulario, por ejemplo, enviándolos a un servidor
    },
 });

 return (
    <section className={styles.container}>
      <header>Registro Medico</header>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles['input-box']}>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            required
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? <p>{formik.errors.firstname}</p> : null}
        </div>
        <div className={styles['input-box']}>
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Ingrese su apellido"
            required
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? <p>{formik.errors.lastname}</p> : null}
        </div>
        <div className={styles.column}>
          <div className={styles['input-box']}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="Ingrese su dirección de correo electrónico"
              required
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </div>
        </div>
        <div className={styles['input-box'] + ' ' + styles.address}>
          <label>Número de Licencia</label>
          <input
            type="text"
            placeholder="Ingrese su número de licencia"
            required
            name="idCard"
            value={formik.values.idCard}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.idCard && formik.errors.idCard ? <p>{formik.errors.idCard}</p> : null}
          <label>Especialidad</label>
          <div className={styles.column}>
            <input
              type="text"
              placeholder="Ingrese su especialidad"
              required
              name="specialty"
              value={formik.values.specialty}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.specialty && formik.errors.specialty ? <p>{formik.errors.specialty}</p> : null}
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
 );
};

export default RegisterMedic;
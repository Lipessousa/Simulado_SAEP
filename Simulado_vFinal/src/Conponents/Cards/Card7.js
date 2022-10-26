import React, { useEffect, useState } from "react";
import './style.css'
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement('#root')

export default function Card7() {
    const [open, setOpen] = useState(false)
    const [room, setRoom] = useState([])
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3000/room'
        axios.get(url)
            .then((res) => {
                setRoom(res.data.resRoom[6])
            })
    }, [])

    useEffect(() => {
        const url = 'http://localhost:3000/movie'
        axios.get(url)
            .then((res) => {
                setMovie(res.data.resMovie[6])
            })
    }, [])

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }


    return (
        <div className="main">
            <h2 className="room" >Sala 7</h2>

            <div className="container">
                <button className="button" onClick={openModal}>Detalhes</button>

                <Modal
                    isOpen={open}
                    onRequestClose={closeModal}
                    contentLabel="Example modal"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                >
                    <div className="modal-header">
                        <h5>{room.sala}</h5>
                        <h5>Horarios: {room.horario}</h5>
                        <h5>Capacidade: {room.capacidade}</h5>
                    </div>
                    <p>Programação: {movie.titulo}</p>
                    <p>Duração: {movie.duracao}</p>
                    <p>Sinopse: {movie.sinopse}</p>
                    <button className="button" onClick={closeModal}>Fechar</button>
                </Modal>

            </div>

        </div>
    );
}
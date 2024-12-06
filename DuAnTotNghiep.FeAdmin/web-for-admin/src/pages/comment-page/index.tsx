import { useState } from "react";
import { commentDto } from '../../models/commentDto'
import avatar1 from '../../assets/images/faces/1.jpg'
import avatar2 from '../../assets/images/faces/2.jpg'
import avatar3 from '../../assets/images/faces/3.jpg'
import avatar4 from '../../assets/images/faces/4.jpg'
import avatar5 from '../../assets/images/faces/5.jpg'
import avatar6 from '../../assets/images/faces/6.jpg'
import avatar7 from '../../assets/images/faces/7.jpg'
interface CommentTableProps {
    comments: commentDto[];
    onAction: (id: number, action: 'approve' | 'reject') => void;
    showActions?: boolean; // Thêm prop để điều khiển hiển thị cột action
}

const CommentTable: React.FC<CommentTableProps> = ({ comments, onAction, showActions = true }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-lg">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phim</th>
                        <th>Comment</th>
                        {showActions && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment) => (
                        <tr key={comment.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="avatar avatar-md">
                                        <img src={comment.avatar} alt="Avatar" />
                                    </div>
                                    <p className="font-bold ms-3 mb-0">{comment.name}</p>
                                </div>
                            </td>
                            <td>
                                <p className="mb-0">{comment.movie_name}</p>
                            </td>
                            <td>
                                <p className="mb-0">{comment.comment}</p>
                            </td>
                            {showActions && (
                                <td>
                                    <a
                                        className="btn btn-outline-success"
                                        onClick={() => onAction && onAction(comment.id, 'approve')}
                                    >
                                        Đồng ý
                                    </a>
                                    <a
                                        className="btn btn-outline-danger ms-3"
                                        onClick={() => onAction && onAction(comment.id, 'reject')}
                                    >
                                        Từ chối
                                    </a>
                                    <a className="btn btn-outline-info ms-3">
                                        <i className="fa-solid fa-share"></i>
                                    </a>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Comments = () => {
    const [pendingComments, setPendingComments] = useState<commentDto[]>([
        {
            id: 1,
            name: 'Nguyễn Văn Chiến',
            movie_id: 1,
            movie_name: "Dead Pool",
            avatar: avatar6,
            comment: 'Phim rất hấp dẫn và kịch tính.'
        },

        {
            id: 2,
            name: 'Lê Thị B',
            movie_id: 1,
            movie_name: "Dead Pool",
            avatar: avatar2,
            comment: 'Cốt truyện sâu sắc và cảnh quay đẹp. Nhất định phải xem!'
        },
        {
            id: 3,
            name: 'Trần Quốc C',
            movie_id: 2,
            movie_name: "Lord Of The Ring",
            avatar: avatar3,
            comment: 'Bộ phim tuyệt vời, nhưng một số đoạn hơi dài dòng.'
        },
        {
            id: 4,
            name: 'Nam Nam',
            movie_id: 2,
            movie_name: "Lord Of The Ring",
            avatar: avatar4,
            comment: 'Bộ phim hành động hay nhất tôi từng được xem.'
        }
    ]);

    const [approvedComments, setApprovedComments] = useState<commentDto[]>([
        {
            id: 1,
            name: 'Nguyễn Văn A',
            movie_id: 1,
            movie_name: "Dead Pool",
            avatar: avatar1,
            comment: 'Phim rất hấp dẫn và kịch tính. Diễn xuất của Cillian Murphy quá đỉnh!'
        },

        {
            id: 2,
            name: 'Lê Thị Bóng',
            movie_id: 4,
            movie_name: "Mật Mã Đỏ",
            avatar: avatar7,
            comment: 'Cốt truyện sâu sắc 8/10.'
        },
        {
            id: 3,
            name: 'Trần Phước Tuấn',
            movie_id: 2,
            movie_name: "VENOM Kèo Cuối",
            avatar: avatar5,
            comment: 'Bộ phim tuyệt vời, rất đáng để xem.'
        }
    ]);

    const handleAction = (id: number, action: 'approve' | 'reject') => {
        const comment = pendingComments.find((comment) => comment.id === id);
        if (!comment) return;

        if (action === 'approve') {
            setApprovedComments([...approvedComments, comment]);
        }

        setPendingComments(pendingComments.filter((comment) => comment.id !== id));
    };

    return (
        <div>
            <header className="mb-3">
                <a href="#" className="burger-btn d-block d-xl-none">
                    <i className="bi bi-justify fs-3"></i>
                </a>
            </header>

            <div className="page-heading">
                <h3>Bình luận</h3>
            </div>
            <div className="page-content">
                <section className="row">
                    <div className="col-12 col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Bình luận cần được duyệt</h4>
                            </div>
                            <div className="card-body">
                                <CommentTable comments={pendingComments} onAction={handleAction} />
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                <h4>Danh sách bình luận đã duyệt</h4>
                            </div>
                            <div className="card-body">
                                <CommentTable comments={approvedComments} showActions={false} onAction={() => { }} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Comments;
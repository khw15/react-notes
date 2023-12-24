const appPage = {
  id: {
    title: 'Dicatatin',
    nav: {
      home: 'Beranda',
      archives: 'Arsip'
    },
    msg: {
      confirm: 'Apakah anda yakin?',
      yes: 'Keluar',
      no: 'Batal',
      loading: 'Memuat data...',
      error: 'Ada kesalahan teknis. Coba lagi nanti.'
    },
    add: 'Tambah',
    cancel: 'Batal',
    delete: 'Hapus',
    archive: 'Arsipkan',
    active: 'Aktifkan',
    back: 'Kembali',
    pageNotFound: 'Halaman Tidak Ditemukan',
    // Swal for delete
    deleteTitle: 'Hapus Catatan',
    deleteText: 'Apakah anda yakin ingin menghapus catatan ini?',
    confirmDeleteButtonText: 'Hapus',
    cancelCancelButtonText: 'Batal',
    successDelete: 'Berhasil menghapus catatan!',
    // Swal for archive
    archiveTitle: 'Arsipkan Catatan',
    archiveText: 'Apakah anda yakin ingin mengarsipkan catatan ini?',
    confirmArchiveButtonText: 'Arsipkan',
    cancelButtonText: 'Batal',
    successArchive: 'Berhasil mengarsipkan catatan!',
    // Swal for unarchive
    unarchiveTitle: 'Aktifkan Catatan',
    unarchiveText: 'Apakah anda yakin ingin mengaktifkan catatan ini?',
    confirmUnarchiveButtonText: 'Aktifkan'
  },
  en: {
    title: 'Dicatatin',
    nav: {
      home: 'Home',
      archives: 'Archives'
    },
    msg: {
      confirm: 'Are you sure?',
      yes: 'Logout',
      no: 'Cancel',
      loading: 'Loading...',
      error: 'Error. Try again later.'
    },
    add: 'Add',
    cancel: 'Cancel',
    delete: 'Delete',
    archive: 'Archive',
    active: 'Active',
    back: 'Back',
    pageNotFound: 'Page Not Found',
    // Swal for delete
    deleteTitle: 'Delete Note',
    deleteText: 'Are you sure you want to delete this note?',
    confirmDeleteButtonText: 'Delete',
    cancelCancelButtonText: 'Cancel',
    successDelete: 'Successfully delete note!',
    // Swal for archive
    archiveTitle: 'Archive Note',
    archiveText: 'Are you sure you want to archive this note?',
    confirmArchiveButtonText: 'Archive',
    cancelArchiveButtonText: 'Cancel',
    successArchive: 'Successfully archive note!'
  },
  ko: {
    title: 'Dicatatin',
    nav: {
      home: '홈',
      archives: '보관',
      korean: '한국어'
    },
    msg: {
      confirm: '확실합니까?',
      yes: '로그아웃',
      no: '취소',
      loading: '로딩 중...',
      error: '기술적 오류가 발생했습니다. 나중에 다시 시도하십시오.'
    },
    add: '추가',
    cancel: '취소',
    delete: '삭제',
    archive: '보관됨',
    active: '활성화',
    back: '뒤로',
    pageNotFound: '페이지를 찾을 수 없습니다',
    // Swal for delete
    deleteTitle: '노트 삭제',
    deleteText: '이 노트를 삭제하시겠습니까?',
    confirmDeleteButtonText: '삭제',
    cancelCancelButtonText: '취소',
    successDelete: '노트가 성공적으로 삭제되었습니다!',
    // Swal for archive
    archiveTitle: '노트 보관',
    archiveText: '이 노트를 보관하시겠습니까?',
    confirmArchiveButtonText: '보관',
    cancelArchiveButtonText: '취소',
    successArchive: '노트가 성공적으로 보관되었습니다!'
  },
  ja: {
    title: 'Dicatatin',
    nav: {
      home: 'ホーム',
      archives: 'アーカイブ'
    },
    msg: {
      confirm: '本当によろしいですか？',
      yes: 'ログアウト',
      no: 'キャンセル',
      loading: 'データを読み込んでいます...',
      error: '技術的なエラーが発生しました。後でもう一度試してください。'
    },
    add: '追加',
    cancel: 'キャンセル',
    delete: '削除',
    archive: 'アーカイブ',
    active: 'アクティブ',
    back: '戻る',
    pageNotFound: 'ページが見つかりません',
    // Swal for delete
    deleteTitle: 'ノートの削除',
    deleteText: 'このノートを削除してもよろしいですか？',
    confirmDeleteButtonText: '削除',
    cancelCancelButtonText: 'キャンセル',
    successDelete: 'ノートの削除に成功しました！',
    // Swal for archive
    archiveTitle: 'ノートのアーカイブ',
    archiveText: 'このノートをアーカイブしてもよろしいですか？',
    confirmArchiveButtonText: 'アーカイブ',
    cancelButtonText: 'キャンセル',
    successArchive: 'ノートのアーカイブに成功しました！',
    // Swal for unarchive
    unarchiveTitle: 'ノートのアクティブ化',
    unarchiveText: 'このノートをアクティブにしてもよろしいですか？',
    confirmUnarchiveButtonText: 'アクティブにする'
  }
}

const loginPage = {
  id: {
    header: 'Masuk untuk menggunakan Dicatatin',
    footer: 'Belum punya akun?',
    footerRegisterLink: 'Daftar',
    login: 'Masuk',
    email: 'Email',
    password: 'Kata Sandi',
    loading: 'Memuat...'
  },
  en: {
    header: 'Login to use app, please',
    footer: 'Don\'t have an account?',
    footerRegisterLink: 'Register',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    loading: 'Loading...'
  },
  ko: {
    header: 'Dicatatin을 사용하려면 로그인하세요',
    footer: '계정이 없으신가요?',
    footerRegisterLink: '회원가입',
    login: '로그인',
    email: '이메일',
    password: '비밀번호',
    loading: '로딩 중...'
  },
  ja: {
    header: 'Dicatatinを利用するにはログインしてください',
    footer: 'アカウントをお持ちでないですか？',
    footerRegisterLink: '登録',
    login: 'ログイン',
    email: '電子メール',
    password: 'パスワード',
    loading: '読み込み中...'
  }
}

const registerPage = {
  id: {
    header: 'Isi seluruh form untuk membuat akun',
    footer: 'Sudah punya akun?',
    footerLoginLink: 'Masuk di sini',
    name: 'Nama',
    email: 'Email',
    password: 'Kata Sandi',
    confirm: 'Konfirmasi Kata Sandi',
    register: 'Daftar',
    loading: 'Memuat...',
    msg: {
      registerSuccess: 'Akun berhasil dibuat',
      confirmPasswordMismatch: 'Kata sandi tidak cocok'
    }
  },
  en: {
    header: 'Fill out the entire form to create an account',
    footer: 'Already have an account?',
    footerLoginLink: 'Login here',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirm: 'Confirm Password',
    register: 'Register',
    loading: 'Loading...',
    msg: {
      registerSuccess: 'Account created successfully',
      confirmPasswordMismatch: 'Password mismatch'
    }
  },
  ko: {
    header: '계정을 등록하려면 양식을 작성하세요',
    footer: '이미 계정이 있으신가요?',
    footerLoginLink: '로그인하기',
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    confirm: '비밀번호 확인',
    register: '회원하기',
    loading: '로딩 중...',
    msg: {
      registerSuccess: '계정이 성공적으로 만들어졌습니다',
      confirmPasswordMismatch: '비밀번호가 일치하지 않습니다'
    }
  },
  ja: {
    header: 'アカウントを作成するにはすべてのフォームに記入してください',
    footer: 'すでにアカウントをお持ちですか？',
    footerLoginLink: 'ログイン',
    name: '名前',
    email: '電子メール',
    password: 'パスワード',
    confirm: 'パスワードの確認',
    register: '登録',
    loading: '読み込み中...',
    msg: {
      registerSuccess: 'アカウント作成成功',
      confirmPasswordMismatch: 'パスワードが一致しません'
    }
  }
}

const notePage = {
  id: {
    header: 'Catatan Aktif',
    searchPlaceholder: 'Cari berdasarkan judul...',
    empty: 'Tidak ada catatan'
  },
  en: {
    header: 'Active Notes',
    searchPlaceholder: 'Search by title...',
    empty: 'There are no notes'
  },
  ko: {
    header: '활성 노트',
    searchPlaceholder: '제목으로 검색...',
    empty: '노트가 없습니다'
  },
  ja: {
    header: 'アクティブノート',
    searchPlaceholder: 'タイトルで検索...',
    empty: 'ノートはありません'
  }
}

const notesNewPage = {
  id: {
    titlePlaceholder: 'Judul',
    bodyPlaceholder: 'Isi Catatan',
    addTitle: 'Catatan Berhasil Ditambahkan',
    addErrorTitle: 'Catatan Gagal Ditambahkan'
  },
  en: {
    titlePlaceholder: 'Title',
    bodyPlaceholder: 'Notes Content',
    addTitle: 'Note Successfully Added',
    addErrorTitle: 'Note Failed to Add'
  },
  ko: {
    titlePlaceholder: '제목',
    bodyPlaceholder: '내용하기',
    addTitle: '추가되었습니다',
    addErrorTitle: '추가하지 못했습니다'
  },
  ja: {
    titlePlaceholder: 'タイトル',
    bodyPlaceholder: 'ノートの内容',
    addTitle: 'ノートが正常に追加されました',
    addErrorTitle: 'ノートの追加に失敗しました'
  }
}

const notesIdPage = {
  id: {
    notFound: 'Catatan tidak ditemukan'
  },
  en: {
    notFound: 'Note not found'
  },
  ko: {
    notFound: '노트를 찾을 수 없습니다'
  },
  ja: {
    notFound: 'ノートが見つかりません'
  }
}

const archivePage = {
  id: {
    header: 'Catatan Arsip'
  },
  en: {
    header: 'Archived Notes'
  },
  ko: {
    header: '보관된 노트'
  },
  ja: {
    header: 'アーカイブされたノート'
  }
}

const content = {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export default content
